import { UntypedHandleCall, handleUnaryCall } from "@grpc/grpc-js"
import { Service, ZodCreateTodoRequest, ZodGetTodosRequest } from "./index"
import {
	CreateTodoRequest,
	CreateTodoResponse,
	DeleteTodoResponse,
	GetTodoResponse,
	GetTodosRequest,
	GetTodosResponse,
	IdRequest,
	TodoSchema,
	UpdateTodoRequest,
	UpdateTodoResponse,
} from "./generated-grpc/v1/todo_pb"
import { Status } from "@grpc/grpc-js/build/src/constants"
import { handleGrpcError, zodIgnoreEmptyValues } from "../util"
import { ZodIdRequest } from "../shareable"
import { ITodoServer } from "./generated-grpc/v1/todo_grpc_pb"

export class TodoControllerGRPC implements ITodoServer {
	service: Service

	constructor(service: Service) {
		this.service = service
	}

	[name: string]: UntypedHandleCall | any

	getTodos: handleUnaryCall<GetTodosRequest, GetTodosResponse> = async (
		call,
		callback
	) => {
		try {
			const req = call.request.toObject()
			const validatedReq = ZodGetTodosRequest.parse({ limit: req.limit })

			const todosRes = await this.service.getTodos({ limit: validatedReq.limit })
			if (!todosRes || todosRes.length === 0) {
				callback({ message: "Failed to get todos", code: Status.NOT_FOUND }, null)
				return
			}

			const todos = todosRes.map((todo) => {
				const todoSchema = new TodoSchema()
				todoSchema.setId(todo.id)
				todoSchema.setTitle(todo.title)
				todoSchema.setCompleted(todo.completed)
				if (todo.description) {
					todoSchema.setDescription(todo.description)
				}

				return todoSchema
			})

			const res = new GetTodosResponse()
			res.setTodosList(todos)
			callback(null, res)
			return
		} catch (error) {
			handleGrpcError<GetTodosResponse>(error, callback)
			return
		}
	}

	getTodoById: handleUnaryCall<IdRequest, GetTodoResponse> = async (call, callback) => {
		try {
			const req = call.request.toObject()
			const validatedReq = ZodIdRequest.parse({ id: req.id })

			const todosRes = await this.service.getTodoById(validatedReq.id)
			if (!todosRes) {
				callback({ message: "Failed to get todos", code: Status.NOT_FOUND }, null)
				return
			}

			const todoSchema = new TodoSchema()
			todoSchema.setId(todosRes.id)
			todoSchema.setTitle(todosRes.title)
			todoSchema.setCompleted(todosRes.completed)
			if (todosRes.description) {
				todoSchema.setDescription(todosRes.description)
			}

			const res = new GetTodoResponse()
			res.setTodo(todoSchema)
			callback(null, res)
			return
		} catch (error) {
			handleGrpcError<GetTodoResponse>(error, callback)
			return
		}
	}

	createTodo: handleUnaryCall<CreateTodoRequest, CreateTodoResponse> = async (
		call,
		callback
	) => {
		// http
		// req { title: 'im', description: 'batman' }
		// validatedReq { title: 'im', description: 'batman' }
		// grpc
		// req {
		//     id: 0,
		//     title: 'what i do at night',
		//     description: 'i am simply batman',
		//     completed: false
		// }
		// validatedReq {
		// id: 0,
		// title: 'what i do at night',
		// description: 'i am simply batman',
		// completed: false
		// }
		try {
			const req = call.request.toObject()
			const validatedReq =
				ZodCreateTodoRequest.transform(zodIgnoreEmptyValues).parse(req)

			console.log(req, validatedReq)

			const todosRes = await this.service.createTodo(validatedReq)
			if (!todosRes) {
				callback(
					{ message: "Failed to create todo", code: Status.INTERNAL },
					null
				)
				return
			}

			const todoSchema = new TodoSchema()
			todoSchema.setId(todosRes.id)
			todoSchema.setTitle(todosRes.title)
			todoSchema.setCompleted(todosRes.completed)
			if (todosRes.description) {
				todoSchema.setDescription(todosRes.description)
			}

			const res = new CreateTodoResponse()
			res.setTodo(todoSchema)
			callback(null, res)
			return
		} catch (error) {
			handleGrpcError<GetTodoResponse>(error, callback)
			return
		}
	}

	updateTodoById: handleUnaryCall<UpdateTodoRequest, UpdateTodoResponse> = (
		call,
		callback
	) => {
		callback(null, {} as UpdateTodoResponse)
	}

	deleteTodoById: handleUnaryCall<IdRequest, DeleteTodoResponse> = (call, callback) => {
		callback(null, {} as DeleteTodoResponse)
	}
}
