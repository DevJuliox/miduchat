import { db } from "../db";
import { resources } from "../db/schema/resources";
import { insertResourceSchema } from "../db/schema/resources";
import { generateEmbeddings } from "../ai/embedding";
import { embeddings as embeddingsTable } from "../db/schema/embeddings";

export const createResource = async (input: any) => {
  try {
    // Validar y parsear el input usando el esquema
    const parsedInput = insertResourceSchema.parse(input);
    const { transcription, title, image, url } = parsedInput;

    // Convertir la transcripción a cadena JSON para la inserción
    const transcriptionJSON = transcription ? JSON.stringify(transcription) : "[]";

    // Insertar el recurso en la tabla 'resources'
    const [resource] = await db
      .insert(resources)
      .values({
        transcription: transcriptionJSON,
        title,
        image,
        url,
      })
      .returning();

    // Generar embeddings a partir de la transcripción si existe
    const transcriptionArray = transcription ?? [];

    const embeddings = await generateEmbeddings(transcriptionArray);
    await db.insert(embeddingsTable).values(
      embeddings.map((embedding: any) => ({
        resourceId: resource.id,
        content: embedding.content,
        embedding: embedding.embedding,
        start: embedding.start,
        duration: embedding.duration,
      }))
    );

    return "Resource successfully created and embedded.";
  } catch (error) {
    // Devolver un mensaje de error claro
    return error instanceof Error ? error.message : "Error, please try again.";
  }
};
