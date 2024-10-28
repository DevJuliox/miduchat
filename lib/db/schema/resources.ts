import { sql } from "drizzle-orm";
import { text, varchar, timestamp, pgTable, json } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { nanoid } from "@/lib/utils";

export const resources = pgTable("resources", {
  id: varchar("id", { length: 191 })
    .primaryKey()
    .$defaultFn(() => nanoid()),

  transcription: json("transcription").notNull(),
  title: text("title").notNull(),  // Agregar campo para el título del video
  image: text("image").notNull(),  // Agregar campo para la imagen del video
  url: text("url").notNull(),  // Agregar campo para la URL del video

  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`now()`),
});

// Actualización del schema de inserción para incluir los nuevos campos
export const insertResourceSchema = createSelectSchema(resources)
  .extend({
    transcription: z.array(z.object({
      text: z.string(),
      start: z.number(),
      duration: z.number(),
    })).optional(),
    title: z.string(),
    image: z.string(),
    url: z.string(),
  })
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });

// Type for resources
export type NewResourceParams = z.infer<typeof insertResourceSchema>;

