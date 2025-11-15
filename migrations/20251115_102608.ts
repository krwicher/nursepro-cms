import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "procedures_blocks_highlighted" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_posts_blocks_highlighted" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"font" boolean,
  	"content" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_attachments_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_name" varchar NOT NULL,
  	"file_id" integer
  );
  
  CREATE TABLE "theories_blocks_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_images_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "theories_blocks_images_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_quiz_encouragment" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"post_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_references_references" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"reference" varchar
  );
  
  CREATE TABLE "theories_blocks_references" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_related_posts_realted_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"procedure_id" integer
  );
  
  CREATE TABLE "theories_blocks_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_two_columns_with_ttitles" (
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
  
  CREATE TABLE "theories_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "theories_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_dropdown_list_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon_id" integer
  );
  
  CREATE TABLE "theories_blocks_dropdown_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_media_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_blocks_highlighted" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "theories_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"social_links_facebook" varchar,
  	"social_links_instagram" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "procedures_blocks_tekst" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "procedures_blocks_add_to_favorites" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "legal_posts_blocks_tekst" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "legal_posts_blocks_add_to_favorites" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "procedures_blocks_tekst" CASCADE;
  DROP TABLE "procedures_blocks_add_to_favorites" CASCADE;
  DROP TABLE "legal_posts_blocks_tekst" CASCADE;
  DROP TABLE "legal_posts_blocks_add_to_favorites" CASCADE;
  ALTER TABLE "quizzes_questions" ADD COLUMN "zdjecie_id" integer;
  ALTER TABLE "quizzes" ADD COLUMN "prev_question" boolean;
  ALTER TABLE "theories" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "theories" ADD COLUMN "estimation" varchar;
  ALTER TABLE "theories" ADD COLUMN "zajawka" varchar;
  ALTER TABLE "theories" ADD COLUMN "zdjecie_id" integer;
  ALTER TABLE "procedures_blocks_highlighted" ADD CONSTRAINT "procedures_blocks_highlighted_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_posts_blocks_highlighted" ADD CONSTRAINT "legal_posts_blocks_highlighted_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_header" ADD CONSTRAINT "theories_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_attachments_attachments" ADD CONSTRAINT "theories_blocks_attachments_attachments_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theories_blocks_attachments_attachments" ADD CONSTRAINT "theories_blocks_attachments_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories_blocks_attachments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_attachments" ADD CONSTRAINT "theories_blocks_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_images_slider_images" ADD CONSTRAINT "theories_blocks_images_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theories_blocks_images_slider_images" ADD CONSTRAINT "theories_blocks_images_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories_blocks_images_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_images_slider" ADD CONSTRAINT "theories_blocks_images_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_quiz_encouragment" ADD CONSTRAINT "theories_blocks_quiz_encouragment_post_id_quizzes_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."quizzes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theories_blocks_quiz_encouragment" ADD CONSTRAINT "theories_blocks_quiz_encouragment_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_references_references" ADD CONSTRAINT "theories_blocks_references_references_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories_blocks_references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_references" ADD CONSTRAINT "theories_blocks_references_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_related_posts_realted_posts" ADD CONSTRAINT "theories_blocks_related_posts_realted_posts_procedure_id_procedures_id_fk" FOREIGN KEY ("procedure_id") REFERENCES "public"."procedures"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theories_blocks_related_posts_realted_posts" ADD CONSTRAINT "theories_blocks_related_posts_realted_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories_blocks_related_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_related_posts" ADD CONSTRAINT "theories_blocks_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_two_columns_with_ttitles" ADD CONSTRAINT "theories_blocks_two_columns_with_ttitles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_tabs_tabs" ADD CONSTRAINT "theories_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_tabs" ADD CONSTRAINT "theories_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_dropdown_list_tabs" ADD CONSTRAINT "theories_blocks_dropdown_list_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theories_blocks_dropdown_list_tabs" ADD CONSTRAINT "theories_blocks_dropdown_list_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories_blocks_dropdown_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_dropdown_list" ADD CONSTRAINT "theories_blocks_dropdown_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_rich_text" ADD CONSTRAINT "theories_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_media_tab" ADD CONSTRAINT "theories_blocks_media_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_image_block" ADD CONSTRAINT "theories_blocks_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theories_blocks_image_block" ADD CONSTRAINT "theories_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_blocks_highlighted" ADD CONSTRAINT "theories_blocks_highlighted_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_rels" ADD CONSTRAINT "theories_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."theories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theories_rels" ADD CONSTRAINT "theories_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "procedures_blocks_highlighted_order_idx" ON "procedures_blocks_highlighted" USING btree ("_order");
  CREATE INDEX "procedures_blocks_highlighted_parent_id_idx" ON "procedures_blocks_highlighted" USING btree ("_parent_id");
  CREATE INDEX "procedures_blocks_highlighted_path_idx" ON "procedures_blocks_highlighted" USING btree ("_path");
  CREATE INDEX "legal_posts_blocks_highlighted_order_idx" ON "legal_posts_blocks_highlighted" USING btree ("_order");
  CREATE INDEX "legal_posts_blocks_highlighted_parent_id_idx" ON "legal_posts_blocks_highlighted" USING btree ("_parent_id");
  CREATE INDEX "legal_posts_blocks_highlighted_path_idx" ON "legal_posts_blocks_highlighted" USING btree ("_path");
  CREATE INDEX "theories_blocks_header_order_idx" ON "theories_blocks_header" USING btree ("_order");
  CREATE INDEX "theories_blocks_header_parent_id_idx" ON "theories_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_header_path_idx" ON "theories_blocks_header" USING btree ("_path");
  CREATE INDEX "theories_blocks_attachments_attachments_order_idx" ON "theories_blocks_attachments_attachments" USING btree ("_order");
  CREATE INDEX "theories_blocks_attachments_attachments_parent_id_idx" ON "theories_blocks_attachments_attachments" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_attachments_attachments_file_idx" ON "theories_blocks_attachments_attachments" USING btree ("file_id");
  CREATE INDEX "theories_blocks_attachments_order_idx" ON "theories_blocks_attachments" USING btree ("_order");
  CREATE INDEX "theories_blocks_attachments_parent_id_idx" ON "theories_blocks_attachments" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_attachments_path_idx" ON "theories_blocks_attachments" USING btree ("_path");
  CREATE INDEX "theories_blocks_images_slider_images_order_idx" ON "theories_blocks_images_slider_images" USING btree ("_order");
  CREATE INDEX "theories_blocks_images_slider_images_parent_id_idx" ON "theories_blocks_images_slider_images" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_images_slider_images_image_idx" ON "theories_blocks_images_slider_images" USING btree ("image_id");
  CREATE INDEX "theories_blocks_images_slider_order_idx" ON "theories_blocks_images_slider" USING btree ("_order");
  CREATE INDEX "theories_blocks_images_slider_parent_id_idx" ON "theories_blocks_images_slider" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_images_slider_path_idx" ON "theories_blocks_images_slider" USING btree ("_path");
  CREATE INDEX "theories_blocks_quiz_encouragment_order_idx" ON "theories_blocks_quiz_encouragment" USING btree ("_order");
  CREATE INDEX "theories_blocks_quiz_encouragment_parent_id_idx" ON "theories_blocks_quiz_encouragment" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_quiz_encouragment_path_idx" ON "theories_blocks_quiz_encouragment" USING btree ("_path");
  CREATE INDEX "theories_blocks_quiz_encouragment_post_idx" ON "theories_blocks_quiz_encouragment" USING btree ("post_id");
  CREATE INDEX "theories_blocks_references_references_order_idx" ON "theories_blocks_references_references" USING btree ("_order");
  CREATE INDEX "theories_blocks_references_references_parent_id_idx" ON "theories_blocks_references_references" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_references_order_idx" ON "theories_blocks_references" USING btree ("_order");
  CREATE INDEX "theories_blocks_references_parent_id_idx" ON "theories_blocks_references" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_references_path_idx" ON "theories_blocks_references" USING btree ("_path");
  CREATE INDEX "theories_blocks_related_posts_realted_posts_order_idx" ON "theories_blocks_related_posts_realted_posts" USING btree ("_order");
  CREATE INDEX "theories_blocks_related_posts_realted_posts_parent_id_idx" ON "theories_blocks_related_posts_realted_posts" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_related_posts_realted_posts_procedure_idx" ON "theories_blocks_related_posts_realted_posts" USING btree ("procedure_id");
  CREATE INDEX "theories_blocks_related_posts_order_idx" ON "theories_blocks_related_posts" USING btree ("_order");
  CREATE INDEX "theories_blocks_related_posts_parent_id_idx" ON "theories_blocks_related_posts" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_related_posts_path_idx" ON "theories_blocks_related_posts" USING btree ("_path");
  CREATE INDEX "theories_blocks_two_columns_with_ttitles_order_idx" ON "theories_blocks_two_columns_with_ttitles" USING btree ("_order");
  CREATE INDEX "theories_blocks_two_columns_with_ttitles_parent_id_idx" ON "theories_blocks_two_columns_with_ttitles" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_two_columns_with_ttitles_path_idx" ON "theories_blocks_two_columns_with_ttitles" USING btree ("_path");
  CREATE INDEX "theories_blocks_tabs_tabs_order_idx" ON "theories_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "theories_blocks_tabs_tabs_parent_id_idx" ON "theories_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_tabs_order_idx" ON "theories_blocks_tabs" USING btree ("_order");
  CREATE INDEX "theories_blocks_tabs_parent_id_idx" ON "theories_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_tabs_path_idx" ON "theories_blocks_tabs" USING btree ("_path");
  CREATE INDEX "theories_blocks_dropdown_list_tabs_order_idx" ON "theories_blocks_dropdown_list_tabs" USING btree ("_order");
  CREATE INDEX "theories_blocks_dropdown_list_tabs_parent_id_idx" ON "theories_blocks_dropdown_list_tabs" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_dropdown_list_tabs_icon_idx" ON "theories_blocks_dropdown_list_tabs" USING btree ("icon_id");
  CREATE INDEX "theories_blocks_dropdown_list_order_idx" ON "theories_blocks_dropdown_list" USING btree ("_order");
  CREATE INDEX "theories_blocks_dropdown_list_parent_id_idx" ON "theories_blocks_dropdown_list" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_dropdown_list_path_idx" ON "theories_blocks_dropdown_list" USING btree ("_path");
  CREATE INDEX "theories_blocks_rich_text_order_idx" ON "theories_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "theories_blocks_rich_text_parent_id_idx" ON "theories_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_rich_text_path_idx" ON "theories_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "theories_blocks_media_tab_order_idx" ON "theories_blocks_media_tab" USING btree ("_order");
  CREATE INDEX "theories_blocks_media_tab_parent_id_idx" ON "theories_blocks_media_tab" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_media_tab_path_idx" ON "theories_blocks_media_tab" USING btree ("_path");
  CREATE INDEX "theories_blocks_image_block_order_idx" ON "theories_blocks_image_block" USING btree ("_order");
  CREATE INDEX "theories_blocks_image_block_parent_id_idx" ON "theories_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_image_block_path_idx" ON "theories_blocks_image_block" USING btree ("_path");
  CREATE INDEX "theories_blocks_image_block_image_idx" ON "theories_blocks_image_block" USING btree ("image_id");
  CREATE INDEX "theories_blocks_highlighted_order_idx" ON "theories_blocks_highlighted" USING btree ("_order");
  CREATE INDEX "theories_blocks_highlighted_parent_id_idx" ON "theories_blocks_highlighted" USING btree ("_parent_id");
  CREATE INDEX "theories_blocks_highlighted_path_idx" ON "theories_blocks_highlighted" USING btree ("_path");
  CREATE INDEX "theories_rels_order_idx" ON "theories_rels" USING btree ("order");
  CREATE INDEX "theories_rels_parent_idx" ON "theories_rels" USING btree ("parent_id");
  CREATE INDEX "theories_rels_path_idx" ON "theories_rels" USING btree ("path");
  CREATE INDEX "theories_rels_media_id_idx" ON "theories_rels" USING btree ("media_id");
  ALTER TABLE "quizzes_questions" ADD CONSTRAINT "quizzes_questions_zdjecie_id_media_id_fk" FOREIGN KEY ("zdjecie_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theories" ADD CONSTRAINT "theories_zdjecie_id_media_id_fk" FOREIGN KEY ("zdjecie_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "quizzes_questions_zdjecie_idx" ON "quizzes_questions" USING btree ("zdjecie_id");
  CREATE INDEX "theories_zdjecie_idx" ON "theories" USING btree ("zdjecie_id");
  ALTER TABLE "procedures" DROP COLUMN "zajawka";
  ALTER TABLE "theories" DROP COLUMN "content";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "procedures_blocks_tekst" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"zdjecie" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "procedures_blocks_add_to_favorites" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"post_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_posts_blocks_tekst" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"zdjecie" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_posts_blocks_add_to_favorites" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"post_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "procedures_blocks_highlighted" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "legal_posts_blocks_highlighted" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_header" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_attachments_attachments" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_attachments" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_images_slider_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_images_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_quiz_encouragment" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_references_references" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_references" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_related_posts_realted_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_related_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_two_columns_with_ttitles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_dropdown_list_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_dropdown_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_media_tab" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_blocks_highlighted" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theories_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "procedures_blocks_highlighted" CASCADE;
  DROP TABLE "legal_posts_blocks_highlighted" CASCADE;
  DROP TABLE "theories_blocks_header" CASCADE;
  DROP TABLE "theories_blocks_attachments_attachments" CASCADE;
  DROP TABLE "theories_blocks_attachments" CASCADE;
  DROP TABLE "theories_blocks_images_slider_images" CASCADE;
  DROP TABLE "theories_blocks_images_slider" CASCADE;
  DROP TABLE "theories_blocks_quiz_encouragment" CASCADE;
  DROP TABLE "theories_blocks_references_references" CASCADE;
  DROP TABLE "theories_blocks_references" CASCADE;
  DROP TABLE "theories_blocks_related_posts_realted_posts" CASCADE;
  DROP TABLE "theories_blocks_related_posts" CASCADE;
  DROP TABLE "theories_blocks_two_columns_with_ttitles" CASCADE;
  DROP TABLE "theories_blocks_tabs_tabs" CASCADE;
  DROP TABLE "theories_blocks_tabs" CASCADE;
  DROP TABLE "theories_blocks_dropdown_list_tabs" CASCADE;
  DROP TABLE "theories_blocks_dropdown_list" CASCADE;
  DROP TABLE "theories_blocks_rich_text" CASCADE;
  DROP TABLE "theories_blocks_media_tab" CASCADE;
  DROP TABLE "theories_blocks_image_block" CASCADE;
  DROP TABLE "theories_blocks_highlighted" CASCADE;
  DROP TABLE "theories_rels" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  ALTER TABLE "quizzes_questions" DROP CONSTRAINT "quizzes_questions_zdjecie_id_media_id_fk";
  
  ALTER TABLE "theories" DROP CONSTRAINT "theories_zdjecie_id_media_id_fk";
  
  DROP INDEX "quizzes_questions_zdjecie_idx";
  DROP INDEX "theories_zdjecie_idx";
  ALTER TABLE "procedures" ADD COLUMN "zajawka" varchar;
  ALTER TABLE "theories" ADD COLUMN "content" jsonb NOT NULL;
  ALTER TABLE "procedures_blocks_tekst" ADD CONSTRAINT "procedures_blocks_tekst_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "procedures_blocks_add_to_favorites" ADD CONSTRAINT "procedures_blocks_add_to_favorites_post_id_categories_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "procedures_blocks_add_to_favorites" ADD CONSTRAINT "procedures_blocks_add_to_favorites_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_posts_blocks_tekst" ADD CONSTRAINT "legal_posts_blocks_tekst_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_posts_blocks_add_to_favorites" ADD CONSTRAINT "legal_posts_blocks_add_to_favorites_post_id_categories_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "legal_posts_blocks_add_to_favorites" ADD CONSTRAINT "legal_posts_blocks_add_to_favorites_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "procedures_blocks_tekst_order_idx" ON "procedures_blocks_tekst" USING btree ("_order");
  CREATE INDEX "procedures_blocks_tekst_parent_id_idx" ON "procedures_blocks_tekst" USING btree ("_parent_id");
  CREATE INDEX "procedures_blocks_tekst_path_idx" ON "procedures_blocks_tekst" USING btree ("_path");
  CREATE INDEX "procedures_blocks_add_to_favorites_order_idx" ON "procedures_blocks_add_to_favorites" USING btree ("_order");
  CREATE INDEX "procedures_blocks_add_to_favorites_parent_id_idx" ON "procedures_blocks_add_to_favorites" USING btree ("_parent_id");
  CREATE INDEX "procedures_blocks_add_to_favorites_path_idx" ON "procedures_blocks_add_to_favorites" USING btree ("_path");
  CREATE INDEX "procedures_blocks_add_to_favorites_post_idx" ON "procedures_blocks_add_to_favorites" USING btree ("post_id");
  CREATE INDEX "legal_posts_blocks_tekst_order_idx" ON "legal_posts_blocks_tekst" USING btree ("_order");
  CREATE INDEX "legal_posts_blocks_tekst_parent_id_idx" ON "legal_posts_blocks_tekst" USING btree ("_parent_id");
  CREATE INDEX "legal_posts_blocks_tekst_path_idx" ON "legal_posts_blocks_tekst" USING btree ("_path");
  CREATE INDEX "legal_posts_blocks_add_to_favorites_order_idx" ON "legal_posts_blocks_add_to_favorites" USING btree ("_order");
  CREATE INDEX "legal_posts_blocks_add_to_favorites_parent_id_idx" ON "legal_posts_blocks_add_to_favorites" USING btree ("_parent_id");
  CREATE INDEX "legal_posts_blocks_add_to_favorites_path_idx" ON "legal_posts_blocks_add_to_favorites" USING btree ("_path");
  CREATE INDEX "legal_posts_blocks_add_to_favorites_post_idx" ON "legal_posts_blocks_add_to_favorites" USING btree ("post_id");
  ALTER TABLE "quizzes_questions" DROP COLUMN "zdjecie_id";
  ALTER TABLE "quizzes" DROP COLUMN "prev_question";
  ALTER TABLE "theories" DROP COLUMN "subtitle";
  ALTER TABLE "theories" DROP COLUMN "estimation";
  ALTER TABLE "theories" DROP COLUMN "zajawka";
  ALTER TABLE "theories" DROP COLUMN "zdjecie_id";`)
}
