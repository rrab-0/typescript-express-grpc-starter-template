import { Request, Response } from "express"

import { handleHttpError } from "../util"
import { ZodIdRequest } from "../shareable"
import {
	Service,
	ZodCreateTodoRequest,
	ZodGetTodosRequest,
	ZodUpdateTodoRequest,
} from "./index"

export class TodoController {
	service: Service

	constructor(service: Service) {
		this.service = service
	}

	async getTodos(req: Request, res: Response) {
		try {
			const reqQuery = req.query
			const validatedReq = ZodGetTodosRequest.parse({ limit: reqQuery.limit })

			const todos = await this.service.getTodos({ limit: validatedReq.limit })
			if (!todos || todos.length === 0) {
				res.status(404).json({ error: "no todos found" })
				return
			}

			res.status(200).json(todos)
			return
		} catch (error) {
			handleHttpError(error, res)
			return
		}
	}

	async getTodoById(req: Request, res: Response) {
		try {
			const reqQuery = req.query
			const validatedReq = ZodIdRequest.parse({ id: reqQuery.id })

			const todo = await this.service.getTodoById(validatedReq.id)
			if (!todo) {
				res.status(404).json({ error: "no todo found" })
				return
			}

			res.status(200).json(todo)
			return
		} catch (error) {
			handleHttpError(error, res)
			return
		}
	}

	async createTodo(req: Request, res: Response) {
		try {
			const reqBody = req.body
			const validatedReq = ZodCreateTodoRequest.parse(reqBody)

			const todo = await this.service.createTodo(validatedReq)
			if (!todo) {
				res.status(500).json({ error: "failed to create todo" })
				return
			}

			res.status(201).json(todo)
			return
		} catch (error) {
			handleHttpError(error, res)
			return
		}
	}

	async updateTodoById(req: Request, res: Response) {
		try {
			const reqParams = req.params
			const reqBody = req.body
			const validatedReqParams = ZodIdRequest.parse(reqParams)
			const validatedReqBody = ZodUpdateTodoRequest.parse(reqBody)

			const todo = await this.service.updateTodoById({
				id: validatedReqParams.id,
				title: validatedReqBody.title,
				description: validatedReqBody.description,
				completed: validatedReqBody.completed,
			})

			if (!todo) {
				res.status(500).json({ error: "failed to update todo" })
				return
			}

			res.status(200).json(todo)
			return
		} catch (error) {
			handleHttpError(error, res)
			return
		}
	}

	async deleteTodoById(req: Request, res: Response) {
		try {
			const reqParams = req.params
			const validatedReqParams = ZodIdRequest.parse(reqParams)

			const todo = await this.service.deleteTodoById(validatedReqParams.id)

			if (!todo) {
				res.status(500).json({ error: "failed to delete todo" })
				return
			}

			res.status(200).json(todo)
			return
		} catch (error) {
			handleHttpError(error, res)
			return
		}
	}
}
