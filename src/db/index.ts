import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

export function setupDB(DATABASE_URL: string) {
	const queryClient = postgres(DATABASE_URL)
	const db = drizzle(queryClient, { schema: schema })
	return db
}
