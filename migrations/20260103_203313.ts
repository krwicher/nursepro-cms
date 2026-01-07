import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  CREATE TABLE "tools_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"font" boolean,
  	"content" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_attachments_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_name" varchar NOT NULL,
  	"file_id" integer
  );
  
  CREATE TABLE "tools_blocks_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_images_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "tools_blocks_images_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_quiz_encouragment" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"post_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_references_references" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"reference" varchar
  );
  
  CREATE TABLE "tools_blocks_references" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_related_posts_realted_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"procedure_id" integer
  );
  
  CREATE TABLE "tools_blocks_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_two_columns_with_ttitles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb NOT NULL,
  	"highlighted" boolean,
  	"title2" varchar,
  	"content2" jsonb NOT NULL,
  	"highlighted2" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_media_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_highlighted" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_dropdown_list_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon_id" integer
  );
  
  CREATE TABLE "tools_blocks_dropdown_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "tools_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"small_label" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "tools" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"subtitle" varchar,
  	"estimation" varchar,
  	"zajawka" varchar,
  	"zdjecie_id" integer,
  	"category_id" integer,
  	"published" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tools_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  ALTER TABLE "procedures_blocks_tabs" ADD COLUMN "small_label" boolean;
  ALTER TABLE "legal_posts_blocks_tabs" ADD COLUMN "small_label" boolean;
  ALTER TABLE "quizzes" ADD COLUMN "published" boolean;
  ALTER TABLE "theories_blocks_tabs" ADD COLUMN "small_label" boolean;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "messages_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tools_id" integer;
  ALTER TABLE "tools_blocks_header" ADD CONSTRAINT "tools_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_attachments_attachments" ADD CONSTRAINT "tools_blocks_attachments_attachments_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools_blocks_attachments_attachments" ADD CONSTRAINT "tools_blocks_attachments_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools_blocks_attachments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_attachments" ADD CONSTRAINT "tools_blocks_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_images_slider_images" ADD CONSTRAINT "tools_blocks_images_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools_blocks_images_slider_images" ADD CONSTRAINT "tools_blocks_images_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools_blocks_images_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_images_slider" ADD CONSTRAINT "tools_blocks_images_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_quiz_encouragment" ADD CONSTRAINT "tools_blocks_quiz_encouragment_post_id_quizzes_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."quizzes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools_blocks_quiz_encouragment" ADD CONSTRAINT "tools_blocks_quiz_encouragment_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_references_references" ADD CONSTRAINT "tools_blocks_references_references_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools_blocks_references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_references" ADD CONSTRAINT "tools_blocks_references_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_related_posts_realted_posts" ADD CONSTRAINT "tools_blocks_related_posts_realted_posts_procedure_id_procedures_id_fk" FOREIGN KEY ("procedure_id") REFERENCES "public"."procedures"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools_blocks_related_posts_realted_posts" ADD CONSTRAINT "tools_blocks_related_posts_realted_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools_blocks_related_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_related_posts" ADD CONSTRAINT "tools_blocks_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_two_columns_with_ttitles" ADD CONSTRAINT "tools_blocks_two_columns_with_ttitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_media_tab" ADD CONSTRAINT "tools_blocks_media_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_image_block" ADD CONSTRAINT "tools_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools_blocks_image_block" ADD CONSTRAINT "tools_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_highlighted" ADD CONSTRAINT "tools_blocks_highlighted_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_rich_text" ADD CONSTRAINT "tools_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_dropdown_list_tabs" ADD CONSTRAINT "tools_blocks_dropdown_list_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools_blocks_dropdown_list_tabs" ADD CONSTRAINT "tools_blocks_dropdown_list_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools_blocks_dropdown_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_dropdown_list" ADD CONSTRAINT "tools_blocks_dropdown_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_tabs_tabs" ADD CONSTRAINT "tools_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_blocks_tabs" ADD CONSTRAINT "tools_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools" ADD CONSTRAINT "tools_zdjecie_id_media_id_fk" FOREIGN KEY ("zdjecie_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools" ADD CONSTRAINT "tools_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tools_rels" ADD CONSTRAINT "tools_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tools_rels" ADD CONSTRAINT "tools_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "messages_updated_at_idx" ON "messages" USING btree ("updated_at");
  CREATE INDEX "messages_created_at_idx" ON "messages" USING btree ("created_at");
  CREATE INDEX "tools_blocks_header_order_idx" ON "tools_blocks_header" USING btree ("_order");
  CREATE INDEX "tools_blocks_header_parent_id_idx" ON "tools_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_header_path_idx" ON "tools_blocks_header" USING btree ("_path");
  CREATE INDEX "tools_blocks_attachments_attachments_order_idx" ON "tools_blocks_attachments_attachments" USING btree ("_order");
  CREATE INDEX "tools_blocks_attachments_attachments_parent_id_idx" ON "tools_blocks_attachments_attachments" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_attachments_attachments_file_idx" ON "tools_blocks_attachments_attachments" USING btree ("file_id");
  CREATE INDEX "tools_blocks_attachments_order_idx" ON "tools_blocks_attachments" USING btree ("_order");
  CREATE INDEX "tools_blocks_attachments_parent_id_idx" ON "tools_blocks_attachments" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_attachments_path_idx" ON "tools_blocks_attachments" USING btree ("_path");
  CREATE INDEX "tools_blocks_images_slider_images_order_idx" ON "tools_blocks_images_slider_images" USING btree ("_order");
  CREATE INDEX "tools_blocks_images_slider_images_parent_id_idx" ON "tools_blocks_images_slider_images" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_images_slider_images_image_idx" ON "tools_blocks_images_slider_images" USING btree ("image_id");
  CREATE INDEX "tools_blocks_images_slider_order_idx" ON "tools_blocks_images_slider" USING btree ("_order");
  CREATE INDEX "tools_blocks_images_slider_parent_id_idx" ON "tools_blocks_images_slider" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_images_slider_path_idx" ON "tools_blocks_images_slider" USING btree ("_path");
  CREATE INDEX "tools_blocks_quiz_encouragment_order_idx" ON "tools_blocks_quiz_encouragment" USING btree ("_order");
  CREATE INDEX "tools_blocks_quiz_encouragment_parent_id_idx" ON "tools_blocks_quiz_encouragment" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_quiz_encouragment_path_idx" ON "tools_blocks_quiz_encouragment" USING btree ("_path");
  CREATE INDEX "tools_blocks_quiz_encouragment_post_idx" ON "tools_blocks_quiz_encouragment" USING btree ("post_id");
  CREATE INDEX "tools_blocks_references_references_order_idx" ON "tools_blocks_references_references" USING btree ("_order");
  CREATE INDEX "tools_blocks_references_references_parent_id_idx" ON "tools_blocks_references_references" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_references_order_idx" ON "tools_blocks_references" USING btree ("_order");
  CREATE INDEX "tools_blocks_references_parent_id_idx" ON "tools_blocks_references" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_references_path_idx" ON "tools_blocks_references" USING btree ("_path");
  CREATE INDEX "tools_blocks_related_posts_realted_posts_order_idx" ON "tools_blocks_related_posts_realted_posts" USING btree ("_order");
  CREATE INDEX "tools_blocks_related_posts_realted_posts_parent_id_idx" ON "tools_blocks_related_posts_realted_posts" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_related_posts_realted_posts_procedure_idx" ON "tools_blocks_related_posts_realted_posts" USING btree ("procedure_id");
  CREATE INDEX "tools_blocks_related_posts_order_idx" ON "tools_blocks_related_posts" USING btree ("_order");
  CREATE INDEX "tools_blocks_related_posts_parent_id_idx" ON "tools_blocks_related_posts" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_related_posts_path_idx" ON "tools_blocks_related_posts" USING btree ("_path");
  CREATE INDEX "tools_blocks_two_columns_with_ttitles_order_idx" ON "tools_blocks_two_columns_with_ttitles" USING btree ("_order");
  CREATE INDEX "tools_blocks_two_columns_with_ttitles_parent_id_idx" ON "tools_blocks_two_columns_with_ttitles" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_two_columns_with_ttitles_path_idx" ON "tools_blocks_two_columns_with_ttitles" USING btree ("_path");
  CREATE INDEX "tools_blocks_media_tab_order_idx" ON "tools_blocks_media_tab" USING btree ("_order");
  CREATE INDEX "tools_blocks_media_tab_parent_id_idx" ON "tools_blocks_media_tab" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_media_tab_path_idx" ON "tools_blocks_media_tab" USING btree ("_path");
  CREATE INDEX "tools_blocks_image_block_order_idx" ON "tools_blocks_image_block" USING btree ("_order");
  CREATE INDEX "tools_blocks_image_block_parent_id_idx" ON "tools_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_image_block_path_idx" ON "tools_blocks_image_block" USING btree ("_path");
  CREATE INDEX "tools_blocks_image_block_image_idx" ON "tools_blocks_image_block" USING btree ("image_id");
  CREATE INDEX "tools_blocks_highlighted_order_idx" ON "tools_blocks_highlighted" USING btree ("_order");
  CREATE INDEX "tools_blocks_highlighted_parent_id_idx" ON "tools_blocks_highlighted" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_highlighted_path_idx" ON "tools_blocks_highlighted" USING btree ("_path");
  CREATE INDEX "tools_blocks_rich_text_order_idx" ON "tools_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "tools_blocks_rich_text_parent_id_idx" ON "tools_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_rich_text_path_idx" ON "tools_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "tools_blocks_dropdown_list_tabs_order_idx" ON "tools_blocks_dropdown_list_tabs" USING btree ("_order");
  CREATE INDEX "tools_blocks_dropdown_list_tabs_parent_id_idx" ON "tools_blocks_dropdown_list_tabs" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_dropdown_list_tabs_icon_idx" ON "tools_blocks_dropdown_list_tabs" USING btree ("icon_id");
  CREATE INDEX "tools_blocks_dropdown_list_order_idx" ON "tools_blocks_dropdown_list" USING btree ("_order");
  CREATE INDEX "tools_blocks_dropdown_list_parent_id_idx" ON "tools_blocks_dropdown_list" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_dropdown_list_path_idx" ON "tools_blocks_dropdown_list" USING btree ("_path");
  CREATE INDEX "tools_blocks_tabs_tabs_order_idx" ON "tools_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "tools_blocks_tabs_tabs_parent_id_idx" ON "tools_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_tabs_order_idx" ON "tools_blocks_tabs" USING btree ("_order");
  CREATE INDEX "tools_blocks_tabs_parent_id_idx" ON "tools_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "tools_blocks_tabs_path_idx" ON "tools_blocks_tabs" USING btree ("_path");
  CREATE UNIQUE INDEX "tools_slug_idx" ON "tools" USING btree ("slug");
  CREATE INDEX "tools_zdjecie_idx" ON "tools" USING btree ("zdjecie_id");
  CREATE INDEX "tools_category_idx" ON "tools" USING btree ("category_id");
  CREATE INDEX "tools_updated_at_idx" ON "tools" USING btree ("updated_at");
  CREATE INDEX "tools_created_at_idx" ON "tools" USING btree ("created_at");
  CREATE INDEX "tools_rels_order_idx" ON "tools_rels" USING btree ("order");
  CREATE INDEX "tools_rels_parent_idx" ON "tools_rels" USING btree ("parent_id");
  CREATE INDEX "tools_rels_path_idx" ON "tools_rels" USING btree ("path");
  CREATE INDEX "tools_rels_media_id_idx" ON "tools_rels" USING btree ("media_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_messages_fk" FOREIGN KEY ("messages_id") REFERENCES "public"."messages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tools_fk" FOREIGN KEY ("tools_id") REFERENCES "public"."tools"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_messages_id_idx" ON "payload_locked_documents_rels" USING btree ("messages_id");
  CREATE INDEX "payload_locked_documents_rels_tools_id_idx" ON "payload_locked_documents_rels" USING btree ("tools_id");
  ALTER TABLE "site_settings" DROP COLUMN "phone";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "messages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_attachments_attachments" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_attachments" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_images_slider_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_images_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_quiz_encouragment" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_references_references" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_references" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_related_posts_realted_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_related_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_two_columns_with_ttitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_media_tab" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_highlighted" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_dropdown_list_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_dropdown_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tools_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "messages" CASCADE;
  DROP TABLE "tools_blocks_header" CASCADE;
  DROP TABLE "tools_blocks_attachments_attachments" CASCADE;
  DROP TABLE "tools_blocks_attachments" CASCADE;
  DROP TABLE "tools_blocks_images_slider_images" CASCADE;
  DROP TABLE "tools_blocks_images_slider" CASCADE;
  DROP TABLE "tools_blocks_quiz_encouragment" CASCADE;
  DROP TABLE "tools_blocks_references_references" CASCADE;
  DROP TABLE "tools_blocks_references" CASCADE;
  DROP TABLE "tools_blocks_related_posts_realted_posts" CASCADE;
  DROP TABLE "tools_blocks_related_posts" CASCADE;
  DROP TABLE "tools_blocks_two_columns_with_ttitles" CASCADE;
  DROP TABLE "tools_blocks_media_tab" CASCADE;
  DROP TABLE "tools_blocks_image_block" CASCADE;
  DROP TABLE "tools_blocks_highlighted" CASCADE;
  DROP TABLE "tools_blocks_rich_text" CASCADE;
  DROP TABLE "tools_blocks_dropdown_list_tabs" CASCADE;
  DROP TABLE "tools_blocks_dropdown_list" CASCADE;
  DROP TABLE "tools_blocks_tabs_tabs" CASCADE;
  DROP TABLE "tools_blocks_tabs" CASCADE;
  DROP TABLE "tools" CASCADE;
  DROP TABLE "tools_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_messages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tools_fk";
  
  DROP INDEX "payload_locked_documents_rels_messages_id_idx";
  DROP INDEX "payload_locked_documents_rels_tools_id_idx";
  ALTER TABLE "site_settings" ADD COLUMN "phone" varchar;
  ALTER TABLE "procedures_blocks_tabs" DROP COLUMN "small_label";
  ALTER TABLE "legal_posts_blocks_tabs" DROP COLUMN "small_label";
  ALTER TABLE "quizzes" DROP COLUMN "published";
  ALTER TABLE "theories_blocks_tabs" DROP COLUMN "small_label";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "messages_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "tools_id";`)
}
