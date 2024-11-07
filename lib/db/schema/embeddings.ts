import { nanoid } from "@/lib/utils";
import { index, pgTable, text, varchar, vector } from "drizzle-orm/pg-core";
import { resources } from "./resources";

export const embeddings = pgTable(
	"embeddings",
	{
		id: varchar("id", { length: 191 })
			.primaryKey()
			.$defaultFn(() => nanoid()),

		resourceId: varchar("resource_id", { length: 191 }).references(
			() => resources.id,
			{ onDelete: "cascade" }
		),

		sku: varchar("sku", { length: 50 }).notNull(), // SKU del producto
		brand: text("brand").notNull(), // Marca del producto
		content: text("content").notNull(), // Texto de descripción para generar el embedding
		embedding: vector("embedding", { dimensions: 1536 }).notNull(), // Vector del embedding
	},
	(table) => ({
		embeddingIndex: index("embeddingIndex").using(
			"hnsw",
			table.embedding.op("vector_cosine_ops")
		),
	})
);
