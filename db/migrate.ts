import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"
import { setupDbMigrationConfig } from "../src/config"

export async function migrateDB() {
	const config = setupDbMigrationConfig()

	const migrationClient = postgres(config.DATABASE_URL, {
		max: 1,
	})

	migrate(drizzle(migrationClient), {
		migrationsFolder: "./drizzle",
	})

	await migrationClient.end()
}
