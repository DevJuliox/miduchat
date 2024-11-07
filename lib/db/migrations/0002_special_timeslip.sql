ALTER TABLE "embeddings" ADD COLUMN "sku" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "embeddings" ADD COLUMN "brand" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "id_product_feed" varchar(191) NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "sku" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "brand" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "mpn" text;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "size" varchar(50) DEFAULT '';--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "image_link" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "additional_image_link" text;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "link" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "condition" varchar(20) NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "availability" varchar(20) NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "price" real NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "sale_price" real NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "product_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "store" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "custom_label" json;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "category_web" text NOT NULL;--> statement-breakpoint
ALTER TABLE "embeddings" DROP COLUMN IF EXISTS "start";--> statement-breakpoint
ALTER TABLE "embeddings" DROP COLUMN IF EXISTS "duration";--> statement-breakpoint
ALTER TABLE "resources" DROP COLUMN IF EXISTS "transcription";--> statement-breakpoint
ALTER TABLE "resources" DROP COLUMN IF EXISTS "image";--> statement-breakpoint
ALTER TABLE "resources" DROP COLUMN IF EXISTS "url";