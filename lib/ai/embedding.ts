import { embed, embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { cosineDistance, desc, gt, sql, eq } from "drizzle-orm";
import { embeddings } from "../db/schema/embeddings";
import { resources } from "../db/schema/resources";
import { db } from "../db";

const embeddingModel = openai.embedding("text-embedding-ada-002");

const generateChunksFromDescription = (description: string) => {
	// Dividir la descripción en fragmentos adecuados para el modelo
	const chunkSize = 500; // Define el tamaño del chunk
	const words = description.split(" ");
	const chunks = [];

	let currentChunk: any = [];
	for (const word of words) {
		if (currentChunk.join(" ").length + word.length < chunkSize) {
			currentChunk.push(word);
		} else {
			chunks.push(currentChunk.join(" "));
			currentChunk = [word];
		}
	}
	if (currentChunk.length) {
		chunks.push(currentChunk.join(" "));
	}

	return chunks;
};

export const generateEmbeddings = async (
	description: string,
	sku: string,
	brand: string
): Promise<
	Array<{ embedding: number[]; content: string; sku: string; brand: string }>
> => {
	// Generamos los chunks a partir de la descripción del producto
	const chunks = generateChunksFromDescription(description);
	const { embeddings } = await embedMany({
		model: embeddingModel,
		values: chunks, // Solo enviamos el texto para el embedding
	});

	// Asociamos cada embedding con su chunk original
	return embeddings.map((e, i) => ({
		content: chunks[i],
		embedding: e,
		sku,
		brand,
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
	const similarity = sql<number>`1 - (${cosineDistance(
		embeddings.embedding,
		userQueryEmbedded
	)})`;

	// Consultar los contenidos más relevantes y agregar la información del producto
	const similarProducts: any = await db
		.select({
			content: embeddings.content,
			similarity,
			productId: resources.id,
			productTitle: resources.title,
			productImage: resources.imageLink,
			productURL: resources.link,
			sku: embeddings.sku,
			brand: embeddings.brand,
			price: resources.price,
			salePrice: resources.salePrice,
		})
		.from(embeddings)
		.innerJoin(
			resources,
			eq(resources.id, embeddings.resourceId) // Usar el operador 'eq'
		)
		.where(gt(similarity, 0.3))
		.orderBy((t) => desc(t.similarity))
		.limit(4);
		

	// Transformar los resultados para incluir la información relevante
	return similarProducts.map(
		(product: {
			content: any;
			similarity: any;
			productId: any;
			productTitle: any;
			productImage: any;
			productURL: any;
			sku: any;
			brand: any;
			price: any;
			salePrice: any;
		}) => ({
			content: product.content,
			similarity: product.similarity,
			product: {
				id: product.productId,
				title: product.productTitle,
				image: product.productImage,
				url: product.productURL,
				sku: product.sku,
				brand: product.brand,
				price: product.price,
				salePrice: product.salePrice,
			},
		})
	);
};
