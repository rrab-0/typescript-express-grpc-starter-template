import { eq } from "drizzle-orm"
import { PostgresJsDatabase } from "drizzle-orm/postgres-js"

import * as schema from "../../db/schema"
import { Repository, Todo } from "./index"

export class TodoRepository implements Repository {
	db: PostgresJsDatabase<typeof schema>

	constructor(db: PostgresJsDatabase<typeof schema>) {
		this.db = db
	}

	async getTodos(limit: number): Promise<Todo[]> {
		try {
			const res = await this.db.select().from(schema.todos).limit(limit)

			if (!res || res.length === 0) {
				throw new Error("no todos found")
			}

			return res
		} catch (error) {
			throw error
		}
	}

	async getTodoById(id: number): Promise<Todo> {
		try {
			const res = await this.db
				.select()
				.from(schema.todos)
				.where(eq(schema.todos.id, id))

			if (!res || res.length === 0) {
				throw new Error(`no todo found with id ${id}`)
			}

			return res[0]
		} catch (error) {
			throw error
		}
	}

	async createTodo(todo: schema.NewTodo): Promise<Todo> {
		try {
			const res = await this.db.insert(schema.todos).values(todo).returning()

			if (!res || res.length === 0) {
				throw new Error("failed to create todo")
			}

			return res[0]
		} catch (error) {
			throw error
		}
	}

	async updateTodoById(todo: Todo): Promise<Todo> {
		try {
			const res = await this.db
				.update(schema.todos)
				.set(todo)
				.where(eq(schema.todos.id, todo.id))
				.returning()

			if (!res || res.length === 0) {
				throw new Error("failed to update todo")
			}

			return res[0]
		} catch (error) {
			throw error
		}
	}

	async deleteTodoById(id: number): Promise<Todo> {
		try {
			const res = await this.db
				.delete(schema.todos)
				.where(eq(schema.todos.id, id))
				.returning()

			if (!res || res.length === 0) {
				throw new Error("failed to delete todo")
			}

			return res[0]
		} catch (error) {
			throw error
		}
	}
}
