import { defineConfig } from "drizzle-kit"
import { setupDbMigrationConfig } from "./src/config"

const config = setupDbMigrationConfig()
export default defineConfig({
	schema: "./db/schema.ts",
	out: "./db/drizzle",
	dialect: "postgresql",
	dbCredentials: {
		url: config.DATABASE_URL,
	},
})
