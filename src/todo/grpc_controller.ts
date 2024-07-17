import { UntypedHandleCall, handleUnaryCall } from "@grpc/grpc-js"
import {
	Service,
	ZodCreateTodoRequest,
	ZodGetTodosRequest,
	ZodUpdateTodoRequest,
} from "."
import { GetTodosRequest } from "./generated-grpc/todo/GetTodosRequest"
import { GetTodosResponse } from "./generated-grpc/todo/GetTodosResponse"
import { TodoHandlers } from "./generated-grpc/todo/Todo"
import { Status } from "@grpc/grpc-js/build/src/constants"
import { handleGrpcError } from "../util"
import { TodoSchema } from "./generated-grpc/todo/TodoSchema"
import { IdRequest } from "./generated-grpc/todo/IdRequest"
import { GetTodoResponse } from "./generated-grpc/todo/GetTodoResponse"
import { CreateTodoRequest } from "./generated-grpc/todo/CreateTodoRequest"
import { CreateTodoResponse } from "./generated-grpc/todo/CreateTodoResponse"
import { UpdateTodoRequest } from "./generated-grpc/todo/UpdateTodoRequest"
import { UpdateTodoResponse } from "./generated-grpc/todo/UpdateTodoResponse"
import { DeleteTodoResponse } from "./generated-grpc/todo/DeleteTodoResponse"
import { ZodIdRequest } from "../shareable"
import { z } from "zod"

export class TodoControllerGRPC implements TodoHandlers {
	service: Service

	constructor(service: Service) {
		this.service = service
	}

	[name: string]: UntypedHandleCall | any

	GetTodos: handleUnaryCall<GetTodosRequest, GetTodosResponse> = async (
		call,
		callback
	) => {
		try {
			const req = call.request
			const validatedReq = ZodGetTodosRequest.parse({ limit: req.limit })

			const todosRes = await this.service.getTodos({ limit: validatedReq.limit })
			if (!todosRes || todosRes.length === 0) {
				callback({ message: "Failed to get todos", code: Status.NOT_FOUND }, null)
				return
			}

			const todoSchema: TodoSchema[] = todosRes.map((todo) => {
				return {
					id: todo.id,
					title: todo.title,
					description: todo.description,
					completed: todo.completed,
				} as TodoSchema
			})

			callback(null, { todos: todoSchema })
			return
		} catch (error) {
			handleGrpcError<GetTodosResponse>(error, callback)
			return
		}
	}

	GetTodoById: handleUnaryCall<IdRequest, GetTodoResponse> = async (call, callback) => {
		try {
			const req = call.request
			const validatedReq = ZodIdRequest.parse(req)

			const todosRes = await this.service.getTodoById(validatedReq.id)
			if (!todosRes) {
				callback({ message: "Failed to get todo", code: Status.NOT_FOUND }, null)
				return
			}

			const todoSchema: TodoSchema = {
				id: todosRes.id,
				title: todosRes.title,
				description: todosRes.description || undefined,
				completed: todosRes.completed,
			}

			callback(null, { todo: todoSchema })
			return
		} catch (error) {
			handleGrpcError<GetTodoResponse>(error, callback)
			return
		}
	}

	CreateTodo: handleUnaryCall<CreateTodoRequest, CreateTodoResponse> = async (
		call,
		callback
	) => {
		try {
			const req = call.request
			const validatedReq = ZodCreateTodoRequest.parse(req)

			const todosRes = await this.service.createTodo(validatedReq)
			if (!todosRes) {
				callback(
					{ message: "Failed to create todo", code: Status.INTERNAL },
					null
				)
				return
			}

			const todoSchema: TodoSchema = {
				id: todosRes.id,
				title: todosRes.title,
				description: todosRes.description || undefined,
				completed: todosRes.completed,
			}

			callback(null, { todo: todoSchema })
			return
		} catch (error) {
			handleGrpcError<CreateTodoResponse>(error, callback)
			return
		}
	}

	UpdateTodoById: handleUnaryCall<UpdateTodoRequest, UpdateTodoResponse> = async (
		call,
		callback
	) => {
		try {
			const req = call.request
			const validatedReq = z
				.intersection(ZodIdRequest, ZodUpdateTodoRequest)
				.parse(req)

			const todosRes = await this.service.updateTodoById(validatedReq)
			if (!todosRes) {
				callback(
					{ message: "Failed to update todo", code: Status.INTERNAL },
					null
				)
				return
			}

			const todoSchema: TodoSchema = {
				id: todosRes.id,
				title: todosRes.title,
				description: todosRes.description || undefined,
				completed: todosRes.completed,
			}

			callback(null, { todo: todoSchema })
			return
		} catch (error) {
			handleGrpcError<UpdateTodoResponse>(error, callback)
			return
		}
	}

	DeleteTodoById: handleUnaryCall<IdRequest, DeleteTodoResponse> = async (
		call,
		callback
	) => {
		try {
			const req = call.request
			const validatedReq = ZodIdRequest.parse(req)

			const todosRes = await this.service.deleteTodoById(validatedReq.id)
			if (!todosRes) {
				callback(
					{ message: "Failed to delete todo", code: Status.INTERNAL },
					null
				)
				return
			}

			const todoSchema: TodoSchema = {
				id: todosRes.id,
				title: todosRes.title,
				description: todosRes.description || undefined,
				completed: todosRes.completed,
			}

			callback(null, { todo: todoSchema })
			return
		} catch (error) {
			handleGrpcError<DeleteTodoResponse>(error, callback)
			return
		}
	}
}
