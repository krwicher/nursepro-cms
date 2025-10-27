import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" RENAME TO "procedures";
  ALTER TABLE "procedures" DROP CONSTRAINT "articles_category_id_categories_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_articles_fk";
  
  DROP INDEX "articles_slug_idx";
  DROP INDEX "articles_category_idx";
  DROP INDEX "articles_updated_at_idx";
  DROP INDEX "articles_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_articles_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "procedures_id" integer;
  ALTER TABLE "procedures" ADD CONSTRAINT "procedures_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_procedures_fk" FOREIGN KEY ("procedures_id") REFERENCES "public"."procedures"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "procedures_slug_idx" ON "procedures" USING btree ("slug");
  CREATE INDEX "procedures_category_idx" ON "procedures" USING btree ("category_id");
  CREATE INDEX "procedures_updated_at_idx" ON "procedures" USING btree ("updated_at");
  CREATE INDEX "procedures_created_at_idx" ON "procedures" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_procedures_id_idx" ON "payload_locked_documents_rels" USING btree ("procedures_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "articles_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "procedures" RENAME TO "articles";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "procedures_id" TO "articles_id";
  ALTER TABLE "articles" DROP CONSTRAINT "procedures_category_id_categories_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_procedures_fk";
  
  DROP INDEX "procedures_slug_idx";
  DROP INDEX "procedures_category_idx";
  DROP INDEX "procedures_updated_at_idx";
  DROP INDEX "procedures_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_procedures_id_idx";
  ALTER TABLE "articles" ADD CONSTRAINT "articles_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "articles_slug_idx" ON "articles" USING btree ("slug");
  CREATE INDEX "articles_category_idx" ON "articles" USING btree ("category_id");
  CREATE INDEX "articles_updated_at_idx" ON "articles" USING btree ("updated_at");
  CREATE INDEX "articles_created_at_idx" ON "articles" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_articles_id_idx" ON "payload_locked_documents_rels" USING btree ("articles_id");`)
}
