import { Request, Response } from "express"
import pino from "pino-http"
import { AppConfig, Env } from "./config"

export const logger = (cfg: AppConfig) =>
	pino({
		transport: {
			target: "pino-pretty",
		},
		serializers: {
			req: (req: Request) => {
				if (cfg.ENV === Env.DEV) {
					return {
						ip: req.ip,
						method: req.method,
						url: req.url,
					}
				}
				return req
			},
			res: (res: Response) => {
				if (cfg.ENV === Env.DEV) {
					return res.statusCode
				}
				return res
			},
			responseTime: (responseTime) => {
				if (cfg.ENV === Env.DEV) {
					return `${responseTime}ms`
				}
				return responseTime
			},
		},
		customSuccessMessage() {
			return `HTTP request completed`
		},
	})
