import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "theories" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "theories" ALTER COLUMN "content" SET NOT NULL;
  ALTER TABLE "theories" ADD COLUMN "published" boolean;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "theories" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "theories" ALTER COLUMN "content" DROP NOT NULL;
  ALTER TABLE "theories" DROP COLUMN "published";`)
}
