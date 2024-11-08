import { createResource } from "@/lib/actions/resources";
import { findRelevantContent } from "@/lib/ai/embedding";
import { openai } from "@ai-sdk/openai";
import {
  convertToCoreMessages,
  generateObject,
  StreamData,
  streamText,
  tool,
} from "ai";
import { z } from "zod";
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const streamingData = new StreamData();
  const result = await streamText({
    model: openai("gpt-4o-mini") as any,
    messages: convertToCoreMessages(messages),
    system: `Eres un asistente para las personas que buscan información sobre motos. Ayuda a los usuarios a encontrar información relevante sobre motos. usando la base de datos de productos de motos.`,
    tools: {
      getInformation: tool({
        description: `Obten informacion de la base de datos de productos de motos, explica las caracteristicas y precios de los productos y luego da la lista de productos relevantes.`,
        parameters: z.object({
          question: z.string().describe("La pregunta del usuario"),
          similarQuestions: z
            .array(z.string())
            .describe("Palabras clave para buscar"),
        }),
        execute: async ({ similarQuestions }) => {
          const results = await Promise.all(
            similarQuestions.map(
              async (question) => await findRelevantContent(question)
            )
          );

          // Aplanar el array de resultados y eliminar duplicados
          const uniqueResults = Array.from(
            new Map(
              results.flat().map((item) => [item?.content, item])
            ).values()
          );

          // Generar texto enriquecido usando el modelo
          const { object } = await generateObject({
            model: openai("gpt-4o-mini") as any,
            schema: z.object({
              introduction: z.string().describe("Introducción entusiasta"),
              productDescriptions: z.array(
                z.object({
                  title: z.string(),
                  highlights: z.string(),
                })
              ),
              conclusion: z.string(),
            }),
            prompt: `Crea un texto informativo para vender estas motos de Coppel pero que no suene a publicidad. Incluye:
              ${JSON.stringify(
                uniqueResults.map((r) => ({
                  title: r.product.title,
                  price: r.product.price,
                  description: r.product.description,
                }))
              )}`,
          });
          // Adaptar la respuesta para incluir la transcripción con tiempo y otros datos relevantes

          return {
            richText: object,
            products: uniqueResults.map((product) => ({
              title: product.product.title,
              image: product.product.image,
              brand: product.product.brand,
              description: product.product.description,
              price: product.product.price,
              salePrice: product.product.salePrice,
              availability: product.product.availability,
              url: product.product.url,
            })),
          };
        },
      }),

      // understandQuery: tool({
      //   description: `Entender la consulta del usuario. Usa esta herramienta en cada solicitud.`,
      //   parameters: z.object({
      //     query: z.string().describe("La consulta del usuario"),
      //     toolsToCallInOrder: z
      //       .array(z.string())
      //       .describe(
      //         "Las herramientas que necesitas usar en el orden necesario para responder la consulta del usuario"
      //       ),
      //   }),
      //   execute: async ({ query }) => {
      //     const { object } = await generateObject({
      //       model: openai("gpt-4o-mini") as any,
      //       system:
      //         "Eres un asistente para entender consultas. Analiza la consulta del usuario y genera preguntas similares.",
      //       schema: z.object({
      //         questions: z
      //           .array(z.string())
      //           .max(3)
      //           .describe(
      //             "Preguntas similares a la consulta del usuario. Sé conciso."
      //           ),
      //       }),
      //       prompt: `Analiza esta consulta: "${query}". Proporciona:
      //               3 preguntas similares que puedan ayudar a responder la consulta del usuario.`,
      //     });
      //     return object.questions;
      //   },
      // }),
    },
    onFinish: async ({ responseMessages, finishReason }) => {
      console.log("🚀 ~ onFinish: ~ finishReason:", finishReason)
      console.log(
        "🚀 ~ onFinish: ~ responseMessages:",
        JSON.stringify(responseMessages, null, 2)
      );
      let enrichedText = "";
      let productsList: any = [];

      // Procesar los mensajes de respuesta
      responseMessages.forEach((message) => {
        if (message.role === "tool" && message.content) {
          // Extraer productos de la respuesta de la herramienta
          message.content.forEach((toolResponse) => {
            if (toolResponse.type === "tool-result") {
              productsList = toolResponse.result;
            }
          });
        } else if (message.role === "assistant") {
          // Extraer texto enriquecido del asistente
          if (Array.isArray(message.content)) {
            message.content.forEach((content) => {
              if (content.type === "text") {
                enrichedText = content.text;
              }
            });
          }
        }
      });
      console.log("🚀 ~ onFinish: ~ productsList:", productsList);
      console.log("🚀 ~ onFinish: ~ enrichedText:", enrichedText);

      // Ejemplo de cómo usar los datos separados
      streamingData.append({
        type: "enrichedText",
        content: enrichedText,
      });

      streamingData.append({
        type: "products",
        content: productsList,
      });
      streamingData.append({
        type: "finishReason",
        content: finishReason,
      });
      streamingData.close();
    },
  });

  return result.toDataStreamResponse({
    data: streamingData,
  });
  // return NextResponse.json(result);
}
