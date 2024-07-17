import { sendUnaryData, ServerErrorResponse } from "@grpc/grpc-js"
import { Status } from "@grpc/grpc-js/build/src/constants"
import { Response } from "express"
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
	} else if (isServerErrorResponse(error)) {
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

/* Colors reference (https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"
FgGray = "\x1b[90m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
BgGray = "\x1b[100m" */
export function consoleErrorRed(message: any) {
	console.error("\x1b[41merror:\x1b[0m\n\x1b[31m%s\x1b[0m", message)
}

export function consoleInfoYellow(message: any) {
	console.info("\x1b[43minfo:\x1b[0m\n\x1b[33m%s\x1b[0m", message)
}
