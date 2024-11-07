import { sql } from "drizzle-orm";
import {
	text,
	varchar,
	timestamp,
	pgTable,
	json,
	real,
} from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { nanoid } from "@/lib/utils";

export const resources = pgTable("resources", {
	id: varchar("id", { length: 191 })
		.primaryKey()
		.$defaultFn(() => nanoid()),

	idProductFeed: varchar("id_product_feed", { length: 191 }).notNull(),
	sku: varchar("sku", { length: 50 }).notNull(),
	brand: text("brand").notNull(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	mpn: text("mpn"),
	size: varchar("size", { length: 50 }).default(""),
	imageLink: text("image_link").notNull(),
	additionalImageLink: text("additional_image_link"),
	link: text("link").notNull(),
	condition: varchar("condition", { length: 20 }).notNull(),
	availability: varchar("availability", { length: 20 }).notNull(),
	price: real("price").notNull(),
	salePrice: real("sale_price").notNull(),
	productType: text("product_type").notNull(),
	store: text("store").notNull(),
	customLabel: json("custom_label"),
	categoryWeb: text("category_web").notNull(),

	createdAt: timestamp("created_at")
		.notNull()
		.default(sql`now()`),
	updatedAt: timestamp("updated_at")
		.notNull()
		.default(sql`now()`),
});

// Esquema de inserción para validar los datos de entrada en resources
export const insertResourceSchema = createSelectSchema(resources)
	.extend({
		idProductFeed: z.string(),
		sku: z.string(),
		brand: z.string(),
		title: z.string(),
		description: z.string(),
		mpn: z.string().nullable(),
		size: z.string().optional(),
		imageLink: z.string(),
		additionalImageLink: z.string().optional(),
		link: z.string(),
		condition: z.string(),
		availability: z.string(),
		price: z.number(),
		salePrice: z.number(),
		productType: z.string(),
		store: z.string(),
		customLabel: z.object({
			custom_label_0: z.string(),
			custom_label_1: z.string(),
			custom_label_2: z.string().optional(),
			custom_label_3: z.string().optional(),
			custom_label_4: z.string().optional(),
		}),
		categoryWeb: z.string(),
	})
	.omit({
		id: true,
		createdAt: true,
		updatedAt: true,
	});

// TypeScript type for resources
export type NewResourceParams = z.infer<typeof insertResourceSchema>;
function now(): any {
	throw new Error("Function not implemented.");
}
