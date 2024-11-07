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
		system: `respondeme con productos de tu base de conocimiento y no inventes.
`,
		tools: {
			getInformation: tool({
				description: `Obtener información de tu base de conocimiento para responder preguntas, no palabras en la lista de motos mas que la informacion que viene de la base de datos.`,
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

					// Adaptar la respuesta para incluir la transcripción con tiempo y otros datos relevantes
					return uniqueResults.map((product) => {
						console.log("🚀 ~ product", product);
						return `
             <li>
  <div class="product-card">
    <img src="${product.imageLink}" alt="${
							product.title
						}" class="product-image" />
    <div class="product-content">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-brand">Marca: ${product.brand}</p>
      <p class="product-description">${product.description}</p>
      <p class="product-price">${
				product.salePrice
					? `<span class="sale-price">${product.salePrice}</span> <span class="original-price">${product.price}</span>`
					: product.price
			}</p>
      <p class="product-availability">${product.availability}</p>
      <a href="${
				product.link
			}" target="_blank" rel="noopener noreferrer" class="product-link">Ver producto</a>
    </div>
  </div>
</li>
            `;
					});
				},
			}),
			understandQuery: tool({
				description: `Entender la consulta del usuario. Usa esta herramienta en cada solicitud.`,
				parameters: z.object({
					query: z.string().describe("La consulta del usuario"),
					toolsToCallInOrder: z
						.array(z.string())
						.describe(
							"Las herramientas que necesitas usar en el orden necesario para responder la consulta del usuario"
						),
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
								.describe(
									"Preguntas similares a la consulta del usuario. Sé conciso."
								),
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
