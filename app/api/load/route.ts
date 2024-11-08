import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createResource } from "@/lib/actions/resources";
import { resources } from "@/lib/db/schema/resources";
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

export const readTranscriptionFiles = (): Array<{ id: string; data: any }> => {
	const transcriptions: Array<{ id: string; data: any }> = [];
	const files = fs.readdirSync(transcriptionsFolder);

	for (const file of files) {
		if (file.endsWith(".json")) {
			const filePath = path.join(transcriptionsFolder, file);
			const content = fs.readFileSync(filePath, "utf-8");
			const data = JSON.parse(content);
			transcriptions.push({ id: file.replace(".json", ""), data });
		}
	}

	return transcriptions;
};

// Función para procesar transcripciones sin duplicar videos
export const processTranscriptions = async () => {
	const transcriptions = readTranscriptionFiles();
	const logMessages = []; // Array para guardar mensajes de log

	logMessages.push(
		`🔍 Leyendo archivos de transcripciones. Total encontrados: ${transcriptions.length}`
	);

	for (const transcription of transcriptions) {
		const { id, data } = transcription;
		logMessages.push(`🔄 Procesando video con ID: ${id}`);

		// Verificar si el video ya existe en la base de datos
		const existingResource = await db
			.select()
			.from(resources)
			.where(eq(resources.id, id))
			.limit(1);

		if (existingResource.length > 0) {
			logMessages.push(
				`⚠️ El video con ID ${id} ya está procesado. Saltando...`
			);
			continue; // Saltar si ya existe
		}

		// Insertar el recurso si no existe
		try {
			await createResource({
				transcription: data.Transcripción,
				title: data.Título,
				image: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
				url: data.URL,
			});
			logMessages.push(`🎉 Video con ID ${id} insertado correctamente.`);
		} catch (error) {
			logMessages.push(`❌ Error al insertar el video con ID ${id}: ${error}`);
		}
	}

	logMessages.push(`🚀 Procesamiento de transcripciones completado.`);
	return logMessages;
};

// Función HTTP para ejecutar el procesamiento de transcripciones
export async function GET(req: Request) {
	try {
		const logMessages = await processTranscriptions();
		return NextResponse.json({
			message: "Transcripciones procesadas.",
			logs: logMessages,
		});
	} catch (error) {
		return NextResponse.json(
			{ message: "Error al procesar transcripciones.", error: error },
			{ status: 500 }
		);
	}
}
