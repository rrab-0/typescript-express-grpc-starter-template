import { z } from "zod"

import { TodoRepository } from "./repository"
import { TodoController } from "./controller"
import { TodoService } from "./service"
import * as schema from "../db/schema"

export { TodoRepository, TodoController, TodoService }

export interface GetTodosRequest {
	limit: number
}

export const ZodGetTodosRequest = z.object({
	limit: z.coerce.number().min(10).max(50),
})

export interface Todo {
	id: number
	title: string
	description: string | null
	completed: boolean
}

export const ZodCreateTodoRequest = z.object({
	id: z.coerce.number().optional(),
	title: z.string().min(1).max(256),
	description: z.string().optional().nullable(),
	completed: z.boolean().optional(),
})

export const ZodUpdateTodoRequest = z.object({
	title: z.string().min(1).max(256),
	description: z.string().nullable(),
	completed: z.boolean(),
})

export interface Repository {
	getTodos(limit: number): Promise<Todo[]>
	getTodoById(id: number): Promise<Todo>
	createTodo(todo: schema.NewTodo): Promise<Todo>
	updateTodoById(todo: Todo): Promise<Todo>
	deleteTodoById(id: number): Promise<Todo>
}

export interface Service {
	getTodos(req: GetTodosRequest): Promise<Todo[]>
	getTodoById(id: number): Promise<Todo>
	createTodo(newTodo: schema.NewTodo): Promise<Todo>
	updateTodoById(todo: Todo): Promise<Todo>
	deleteTodoById(id: number): Promise<Todo>
}
