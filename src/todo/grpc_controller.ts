import { UntypedHandleCall, handleUnaryCall } from "@grpc/grpc-js"
import { Service, ZodGetTodosRequest } from "."
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

	GetTodoById: handleUnaryCall<IdRequest, GetTodoResponse> = async (
		call,
		callback
	) => {}

	CreateTodo: handleUnaryCall<CreateTodoRequest, CreateTodoResponse> = async (
		call,
		callback
	) => {}

	UpdateTodoById: handleUnaryCall<UpdateTodoRequest, UpdateTodoResponse> = (
		call,
		callback
	) => {}

	DeleteTodoById: handleUnaryCall<IdRequest, DeleteTodoResponse> = (
		call,
		callback
	) => {}
}
