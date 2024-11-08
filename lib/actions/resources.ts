import { db } from "../db";
import { resources } from "../db/schema/resources";
import { insertResourceSchema } from "../db/schema/resources";
import { generateEmbeddings } from "../ai/embedding";
import { embeddings as embeddingsTable } from "../db/schema/embeddings";

export const createResource = async (input: any) => {
	try {
    // Convertir el campo sku a string si es necesario
    if (typeof input.sku !== 'string') {
      input.sku = String(input.sku);
  }
		// Validar y parsear el input usando el esquema
		const parsedInput = insertResourceSchema.parse(input);
		const {
			idProductFeed,
			sku,
			brand,
			title,
			description,
			mpn,
			size,
			imageLink,
			additionalImageLink,
			link,
			condition,
			availability,
			price,
			salePrice,
			productType,
			store,
			customLabel,
			categoryWeb,
		} = parsedInput;

		// Insertar el recurso en la tabla 'resources'
		const [resource] = await db
			.insert(resources)
			.values({
				idProductFeed,
				sku,
				brand,
				title,
				description,
				mpn,
				size,
				imageLink,
				additionalImageLink,
				link,
				condition,
				availability,
				price,
				salePrice,
				productType,
				store,
				customLabel,
				categoryWeb,
			})
			.returning();

		// Generar embeddings a partir de la descripción del producto
		const embeddings = await generateEmbeddings(description, sku, brand);

		// Insertar los embeddings en la tabla 'embeddings'
		await db.insert(embeddingsTable).values(
			embeddings.map((embedding: any) => ({
				resourceId: resource.id,
				content: embedding.content,
				embedding: embedding.embedding,
				sku,
				brand,
			}))
		);

    // Log para verificar la inserción de embeddings
    console.log("Embeddings insertados para el recurso ID:", resource.id);

		return "Resource successfully created and embedded.";
	} catch (error) {
    // Log para capturar el error
    console.error("Error al crear el recurso:", error);
    // Devolver un mensaje de error claro
    return error instanceof Error ? error.message : "Error, please try again.";
}
};
