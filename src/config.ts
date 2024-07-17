import { consoleErrorRed } from "./util"

interface AppConfig {
	DATABASE_URL: string
	PORT: number
	PORT_GRPC: number
}

interface DbMigrationConfig {
	DATABASE_URL: string
}

// TODO: use zod for validation
export function setupConfig(): AppConfig {
	let databaseUrl = process.env.DATABASE_URL
	let port: string | number | undefined = process.env.PORT
	let portGRPC: string | number | undefined = process.env.PORT_GRPC

	if (!databaseUrl) {
		consoleErrorRed("ERROR: DATABASE_URL environment variable is not set")
		process.exit()
	}

	if (!port || !portGRPC) {
		consoleErrorRed("ERROR: PORT or PORT_GRPC environment variable is not set")
		process.exit()
	}

	port = parseInt(port)
	portGRPC = parseInt(portGRPC)
	if (isNaN(port) || isNaN(portGRPC)) {
		consoleErrorRed("ERROR: PORT or PORT_GRPC environment variable is not a number")
		process.exit()
	}

	const appConfig = {
		DATABASE_URL: databaseUrl,
		PORT: port,
		PORT_GRPC: portGRPC,
	}

	return appConfig
}

export function setupDbMigrationConfig(): DbMigrationConfig {
	let databaseUrl = process.env.DATABASE_URL

	if (!databaseUrl) {
		consoleErrorRed("ERROR: DATABASE_URL environment variable is not set")
		process.exit()
	}

	const dbMigrationConfig = {
		DATABASE_URL: databaseUrl,
	}

	return dbMigrationConfig
}
