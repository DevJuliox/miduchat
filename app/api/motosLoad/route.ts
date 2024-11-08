import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createResource } from "@/lib/actions/resources";
import { resources } from "@/lib/db/schema/resources";
import { embeddings } from "@/lib/db/schema/embeddings";
import { embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { eq } from "drizzle-orm";

// Colores para la consola (solo para referencia interna)
const COLORS = {
	reset: "\x1b[0m",
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	cyan: "\x1b[36m",
};

// Ruta de la carpeta de transcripciones
const transcriptionsFolder = path.join(process.cwd(), "transcripciones");
const embeddingModel = openai.embedding("text-embedding-ada-002");

// Función para leer el archivo de productos motos.json
export const readProductFile = () => {
	const filePath = path.join(transcriptionsFolder, "motos2.json");
	const content = fs.readFileSync(filePath, "utf-8");
	return JSON.parse(content);
};

// Función para dividir la descripción en chunks
const generateChunksFromDescription = (description: string) => {
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

// Función para procesar productos y generar embeddings
export const processProducts = async () => {
	const products = readProductFile();
	const logMessages = []; // Array para guardar mensajes de log

	logMessages.push(
		`🔍 Leyendo archivo de productos. Total encontrados: ${products.length}`
	);

	for (const product of products) {
		const {
			id,
			id_product_feed: idProductFeed,
			sku,
			brand,
			title,
			description,
			mpn,
			size,
			image_link: imageLink,
			additional_image_link: additionalImageLink,
			link,
			condition,
			availability,
			price,
			sale_price: salePrice,
			product_type: productType,
			store,
			custom_label: customLabel,
			category_web: categoryWeb,
		} = product;

		logMessages.push(`🔄 Procesando producto con ID: ${id}`);

		// Verificar si el producto ya existe en la base de datos
		const existingResource = await db
			.select()
			.from(resources)
			.where(eq(resources.id, id))
			.limit(1);

		if (existingResource.length > 0) {
			logMessages.push(
				`⚠️ El producto con ID ${id} ya está procesado. Saltando...`
			);
			continue; // Saltar si ya existe
		}

		// Usar createResource para insertar el recurso y generar embeddings
		try {
			await createResource({
				id,
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
			});
			logMessages.push(
				`🎉 Producto con ID ${id} insertado correctamente y embeddings generados.`
			);
		} catch (error) {
			logMessages.push(
				`❌ Error al insertar el producto con ID ${id}: ${error}`
			);
		}
	}

	logMessages.push(`🚀 Procesamiento de productos completado.`);
	return logMessages;
};

// Función HTTP para ejecutar el procesamiento de productos
export async function GET(req: Request) {
	try {
		const logMessages = await processProducts();
		return NextResponse.json({
			message: "Productos procesados.",
			logs: logMessages,
		});
	} catch (error) {
		return NextResponse.json(
			{ message: "Error al procesar productos.", error: error },
			{ status: 500 }
		);
	}
}
