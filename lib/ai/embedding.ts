import { embed, embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { cosineDistance, desc, gt, sql, eq } from "drizzle-orm";
import { embeddings } from "../db/schema/embeddings"
import { resources } from "../db/schema/resources";
import { db } from "../db";

const embeddingModel = openai.embedding("text-embedding-ada-002");

const generateChunksFromTranscription = (transcription: Array<{ text: string; start: number; duration: number }>) => {
  return transcription.map((segment) => ({
    text: segment.text.trim(),
    start: segment.start,
    duration: segment.duration,
  })).filter((chunk) => chunk.text !== "");
};

export const generateEmbeddings = async (
  transcription: Array<{ text: string; start: number; duration: number }>
): Promise<Array<{ embedding: number[]; content: string; start: number; duration: number }>> => {
  // Generamos los chunks a partir de la transcripción
  const chunks = generateChunksFromTranscription(transcription);
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunks.map(chunk => chunk.text),  // Solo enviamos el texto para el embedding
  });

  // Asociamos cada embedding con su chunk original, incluyendo el tiempo
  return embeddings.map((e, i) => ({
    content: chunks[i].text,
    embedding: e,
    start: chunks[i].start,
    duration: chunks[i].duration,
  }));
};


export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll("\n", " ");
  const { embedding } = await embed({
    model: embeddingModel,
    value: input,
  });
  return embedding;
};

export const findRelevantContent = async (userQuery: string) => {
  // Generar embedding para la consulta del usuario
  const userQueryEmbedded = await generateEmbedding(userQuery);

  // Calcular la similitud con los embeddings en la base de datos
  const similarity = sql<number>`1 - (${cosineDistance(embeddings.embedding, userQueryEmbedded)})`;

  // Consultar los contenidos más relevantes y agregar la información del video
  const similarGuides = await db
    .select({
      content: embeddings.content,
      start: embeddings.start,
      duration: embeddings.duration,
      similarity,
      videoId: resources.id,
      videoTitle: resources.title,
      videoImage: resources.image,
      videoURL: resources.url,
    })
    .from(embeddings)
    .innerJoin(
      resources,
      eq(resources.id, embeddings.resourceId)  // Usar el operador 'eq'
    )
    .where(gt(similarity, 0.3))
    .orderBy((t) => desc(t.similarity))
    .limit(4);

  // Transformar los resultados para incluir la información relevante
  return similarGuides.map((guide) => ({
    content: guide.content,
    start: guide.start,
    duration: guide.duration,
    similarity: guide.similarity,
    video: {
      id: guide.videoId,
      title: guide.videoTitle,
      image: guide.videoImage,
      url: `${guide.videoURL}&t=${Math.floor(guide.start)}s`,  // Agregamos el tiempo al URL
    },
  }));
};
