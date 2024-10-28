import { createResource } from "@/lib/actions/resources";
import { findRelevantContent } from "@/lib/ai/embedding";
import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, generateObject, streamText, tool } from "ai";
import { z } from "zod";
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;


export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini") as any,
    messages: convertToCoreMessages(messages),
    system: `Eres un asistente útil que actúa como un recomendador de videos para los usuarios. Cuando el usuario haga una consulta, utiliza la información de tu base de conocimiento para sugerir los videos más relevantes. Asegúrate de recomendar videos que se alineen con el tema mencionado por el usuario, proporcionando detalles como el título, el fragmento relevante de la transcripción, la imagen del video y el enlace al momento preciso del video en YouTube. Si la consulta del usuario requiere usar varias herramientas, utilízalas en orden antes de responder. Si no encuentras videos relevantes en tu base de conocimiento, responde: "Lo siento, no encontré videos sobre ese tema". Mantén tus respuestas cortas y concisas, enfocándote solo en recomendar los videos más útiles. 
`,
    tools: {
      getInformation: tool({
        description: `Obtener información de tu base de conocimiento para responder preguntas, no palabras en la lista de videos mas que la informacion que viene de la base de datos.`,
        parameters: z.object({
          question: z.string().describe("La pregunta del usuario"),
          similarQuestions: z.array(z.string()).describe("Palabras clave para buscar"),
        }),
        execute: async ({ similarQuestions }) => {
          const results = await Promise.all(
            similarQuestions.map(async (question) => await findRelevantContent(question))
          );

          // Aplanar el array de resultados y eliminar duplicados
          const uniqueResults = Array.from(
            new Map(results.flat().map((item) => [item?.content, item])).values()
          );
          
          // Adaptar la respuesta para incluir la transcripción con tiempo y otros datos relevantes
          return uniqueResults.map((result) => {
            return `
              <li>
                <div class="video-card">
                  <img src="${result.video?.image}" alt="${result.video?.title}" class="video-image" />
                  <div class="video-content">
                    <a href="${result.video?.url}" target="_blank" rel="noopener noreferrer" class="video-title">${result.video?.title}</a>
                    <p class="video-fragment">${result.content}</p>
                  </div>
                </div>
              </li>
            `;
          });
          
          
          return uniqueResults.map((result) => ({
            content: result.content,
            start: result.start,
            duration: result.duration,
            title: result.video?.title,
            image: result.video?.image,
            url: `${result.video?.url}&t=${Math.floor(result.start)}s`,
          }));
        },
      }),
      understandQuery: tool({
        description: `Entender la consulta del usuario. Usa esta herramienta en cada solicitud.`,
        parameters: z.object({
          query: z.string().describe("La consulta del usuario"),
          toolsToCallInOrder: z
            .array(z.string())
            .describe("Las herramientas que necesitas usar en el orden necesario para responder la consulta del usuario"),
        }),
        execute: async ({ query }) => {
          const { object } = await generateObject({
            model: openai("gpt-4o-mini") as any,
            system:
              "Eres un asistente para entender consultas. Analiza la consulta del usuario y genera preguntas similares.",
            schema: z.object({
              questions: z
                .array(z.string())
                .max(3)
                .describe("Preguntas similares a la consulta del usuario. Sé conciso."),
            }),
            prompt: `Analiza esta consulta: "${query}". Proporciona:
                    3 preguntas similares que puedan ayudar a responder la consulta del usuario.`,
          });
          return object.questions;
        },
      }),
    },
  });

  console.log("🚀 ~ Chat ~ result:", result.toDataStreamResponse());

  return result.toDataStreamResponse();
  // return NextResponse.json(result);
}
