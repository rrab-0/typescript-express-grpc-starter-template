import { sendUnaryData, ServerErrorResponse, status } from "@grpc/grpc-js"
import { Status } from "@grpc/grpc-js/build/src/constants"
import { Response } from "express"
import { PostgresError } from "postgres"
import { z } from "zod"

export function handleHttpError(error: unknown, res: Response) {
	consoleErrorRed(error)
	if (error instanceof z.ZodError) {
		res.status(400).json({
			error: error.errors.map((e) => {
				return `${e.path}: ${e.message.toLowerCase()}`
			}),
		})
	} else if (error instanceof Error) {
		res.status(500).json({ error: error.message })
	} else {
		res.status(500).json({ error: "Internal server error" })
	}
}

function isServerErrorResponse(error: any): error is ServerErrorResponse {
	return (
		"code" in error &&
		"details" in error &&
		"metadata" in error &&
		"name" in error &&
		"message" in error &&
		"stack" in error
	)
}

export function handleGrpcError<T>(error: unknown, callback: sendUnaryData<T>) {
	consoleErrorRed(error)
	if (error instanceof z.ZodError) {
		callback(
			{
				code: Status.INVALID_ARGUMENT,
				message: "Failed to validate request",
				details: error.errors
					.map((e) => {
						return `${e.path}: ${e.message.toLowerCase()}`
					})
					.toString(),
			},
			null
		)
	} /* else if (error instanceof PostgresError) {
		// handle postgres errors here if you want but im too lazy for that
	}  */ else if (isServerErrorResponse(error)) {
		callback(
			{
				code: Status.INTERNAL,
				message: error.message,
				details: error.details,
			},
			null
		)
	} else if (error instanceof Error) {
		callback(
			{
				code: Status.INTERNAL,
				name: error.name,
				message: error.message,
			},
			null
		)
	} else {
		callback(
			{
				code: Status.INTERNAL,
				message: "Failed to process request",
				details: "internal server error",
			},
			null
		)
	}
}

export function zodIgnoreEmptyValues(data: any) {
	for (const property in data) {
		if (!data[property]) {
			delete data[property]
		}
	}
	return data
}

// reference (https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)
const colors = {
	// util
	reset: "\x1b[0m",
	bright: "\x1b[1m",
	dim: "\x1b[2m",
	underscore: "\x1b[4m",
	blink: "\x1b[5m",
	reverse: "\x1b[7m",
	hidden: "\x1b[8m",
	// fg
	fgBlack: "\x1b[30m",
	fgRed: "\x1b[31m",
	fgGreen: "\x1b[32m",
	fgYellow: "\x1b[33m",
	fgBlue: "\x1b[34m",
	fgMagenta: "\x1b[35m",
	fgCyan: "\x1b[36m",
	fgWhite: "\x1b[37m",
	fgGray: "\x1b[90m",
	// bg
	bgBlack: "\x1b[40m",
	bgRed: "\x1b[41m",
	bgGreen: "\x1b[42m",
	bgYellow: "\x1b[43m",
	bgBlue: "\x1b[44m",
	bgMagenta: "\x1b[45m",
	bgCyan: "\x1b[46m",
	bgWhite: "\x1b[47m",
	bgGray: "\x1b[100m",
}

// NOTE: i honestly don't know if this would preserve all errors or not,
// so when in doubt do not trust this and just use console.error normally
export function consoleErrorRed(message: any) {
	const formattedMessage = JSON.stringify(
		message,
		(_, value) => {
			if (value instanceof Error) {
				return {
					name: value.name,
					message: value.message,
					stack: value.stack,
					...(value as any),
				}
			}
			return value
		},
		4
	)

	console.error(
		`${colors.bgRed}error:${colors.reset}\n${colors.fgRed}%s${colors.reset}`,
		formattedMessage
	)
}

// export function statusCodeColor(statusCode: number): string {
// 	switch (true) {
// 		case statusCode >= 100 && statusCode < 200:
// 			return `${colors.bgWhite}${colors.fgBlack}${statusCode}${colors.reset}`
// 		case statusCode >= 200 && statusCode < 300:
// 			return `${colors.bgGreen}${statusCode}${colors.reset}`
// 		case statusCode >= 300 && statusCode < 400:
// 			return `${colors.bgWhite}${colors.fgBlack}${statusCode}${colors.reset}`
// 		case statusCode >= 400 && statusCode < 500:
// 			return `${colors.bgYellow}${statusCode}${colors.reset}`
// 		default:
// 			return `${colors.bgRed}${statusCode}${colors.reset}`
// 	}
// }
