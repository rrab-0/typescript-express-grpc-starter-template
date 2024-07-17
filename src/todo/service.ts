import { GetTodosRequest, Repository, Service, Todo } from "./index"
import * as schema from "../../db/schema"

export class TodoService implements Service {
	repository: Repository

	constructor(repository: Repository) {
		this.repository = repository
	}

	async getTodos(req: GetTodosRequest): Promise<Todo[]> {
		return await this.repository.getTodos(req.limit)
	}

	async getTodoById(id: number): Promise<Todo> {
		return await this.repository.getTodoById(id)
	}

	async createTodo(newTodo: schema.NewTodo): Promise<Todo> {
		return await this.repository.createTodo(newTodo)
	}

	async updateTodoById(todo: Todo): Promise<Todo> {
		return await this.repository.updateTodoById(todo)
	}

	async deleteTodoById(id: number): Promise<Todo> {
		return await this.repository.deleteTodoById(id)
	}
}
