import { defineConfig } from "drizzle-kit"
import { setupDbMigrationConfig } from "./src/config"

const config = setupDbMigrationConfig()
export default defineConfig({
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	dialect: "postgresql",
	dbCredentials: {
		url: config.DATABASE_URL,
	},
})
