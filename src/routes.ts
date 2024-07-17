import { Express } from "express"
import { TodoController } from "./todo"

export function setupRoutes(app: Express, todoCtrl: TodoController) {
	app.get("/api/v1/todos", (req, res) => todoCtrl.getTodos(req, res))
	app.get("/api/v1/todo", (req, res) => todoCtrl.getTodoById(req, res))
	app.post("/api/v1/todo/create", (req, res) => todoCtrl.createTodo(req, res))
	app.patch("/api/v1/todo/update/:id", (req, res) => todoCtrl.updateTodoById(req, res))
	app.delete("/api/v1/todo/delete/:id", (req, res) => todoCtrl.deleteTodoById(req, res))
}
