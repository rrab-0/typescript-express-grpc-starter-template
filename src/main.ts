import express, { Request, Response } from "express"
import cors from "cors"

import { setupConfig } from "./config"
import { setupDB } from "./db"

// gRPC v1
// import { Server, ServerCredentials } from "@grpc/grpc-js"
// import { TodoService as TodoServiceGRPC } from "./todo/generated-grpc/todo_grpc_pb"
// import { TodoControllerGRPC } from "./todo/grpc_controller"
// import { loadSync } from "@grpc/proto-loader"
// import { ReflectionService } from "@grpc/reflection"
// const pkgDef = loadSync("./protos/todo.proto", { defaults: true })

// gRPC v2
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ReflectionService } from "@grpc/reflection"

// HTTP
import { setupRoutes } from "./routes"
import { TodoController, TodoService, TodoRepository } from "./todo"
import { ProtoGrpcType } from "./todo/generated-grpc/v2/todo"
import { TodoControllerGRPCv2 } from "./todo/grpc_controller_v2"

const appConfig = setupConfig()
const db = setupDB(appConfig.DATABASE_URL)

function startServerHTTP() {
	const app = express()
	app.use(express.json())
	app.use(cors())

	const todoCtrl = new TodoController(new TodoService(new TodoRepository(db)))
	setupRoutes(app, todoCtrl)

	app.get("/", (req: Request, res: Response) => {
		console.log(req.headers)
		res.send("service is up and running")
	})

	const port = appConfig.PORT
	app.listen(port, () => {
		console.log(`listening on port http://localhost:${port}`)
	})
}

// function startServerGRPC() {
// 	const server = new Server()
// 	const reflection = new ReflectionService(pkgDef)
// 	reflection.addToServer(server)

// 	const todoCtrl = new TodoControllerGRPC(new TodoService(new TodoRepository(db)))
// 	server.addService(TodoServiceGRPC, {
// 		getTodos: todoCtrl.getTodos,
// 		getTodoById: todoCtrl.getTodoById,
// 		createTodo: todoCtrl.createTodo,
// 		updateTodoById: todoCtrl.updateTodoById,
// 		deleteTodoById: todoCtrl.deleteTodoById,
// 	})

// 	const port = appConfig.PORT_GRPC
// 	server.bindAsync(
// 		`localhost:${port}`,
// 		ServerCredentials.createInsecure(),
// 		(err, port) => {
// 			if (err != null) {
// 				return console.error(err)
// 			}
// 			console.log(`gRPC listening on ${port}`)
// 		}
// 	)
// }

function startServerGRPCv2() {
	const pkgDef = protoLoader.loadSync("../protos/todo.proto")
	const proto = grpc.loadPackageDefinition(pkgDef) as unknown as ProtoGrpcType

	const server = new grpc.Server()
	const reflection = new ReflectionService(pkgDef)
	reflection.addToServer(server)

	const todoCtrl = new TodoControllerGRPCv2(new TodoService(new TodoRepository(db)))
	server.addService(proto.todo.Todo.service, todoCtrl)

	const port = appConfig.PORT_GRPC
	server.bindAsync(
		`localhost:${port}`,
		grpc.ServerCredentials.createInsecure(),
		(err, port) => {
			if (err != null) {
				return console.error(err)
			}
			console.log(`gRPC listening on ${port}`)
		}
	)
}

startServerHTTP()
startServerGRPCv2()
// startServerGRPC()
