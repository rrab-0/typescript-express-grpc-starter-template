import { z } from "zod"
import { consoleErrorRed } from "./util"

export interface AppConfig {
	DATABASE_URL: string
	PORT: number
	PORT_GRPC: number
}

const ZodAppConfig = z.object({
	DATABASE_URL: z.string(),
	PORT: z.coerce.number(),
	PORT_GRPC: z.coerce.number(),
})

interface DbMigrationConfig {
	DATABASE_URL: string
}

const ZodDbMigrationConfig = z.object({
	DATABASE_URL: z.string(),
})

export function setupConfig(): AppConfig {
	try {
		const validatedCfg = ZodAppConfig.parse({
			DATABASE_URL: process.env.DATABASE_URL,
			PORT: process.env.PORT,
			PORT_GRPC: process.env.PORT_GRPC,
		})

		return validatedCfg
	} catch (error) {
		if (error instanceof z.ZodError) {
			consoleErrorRed({
				message: "ERROR: Failed to parse .env",
				errors: error.errors.map((e) => {
					return `${e.path}: ${e.message.toLowerCase()}`
				}),
			})
		} else {
			consoleErrorRed(error)
		}
		process.exit()
	}
}

export function setupDbMigrationConfig(): DbMigrationConfig {
	try {
		const validatedCfg = ZodDbMigrationConfig.parse({
			DATABASE_URL: process.env.DATABASE_URL,
		})

		return validatedCfg
	} catch (error) {
		if (error instanceof z.ZodError) {
			consoleErrorRed({
				message: "ERROR: Failed to parse .env",
				errors: error.errors.map((e) => {
					return `${e.path}: ${e.message.toLowerCase()}`
				}),
			})
		} else {
			consoleErrorRed(error)
		}
		process.exit()
	}
}
