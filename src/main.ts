import { AppConfig, setupConfig } from "./config"
import { setupDB } from "../db"
import * as schema from "../db/schema"

// gRPC
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ReflectionService } from "@grpc/reflection"
import { loggerInterceptor } from "./interceptors"

// HTTP
import express, { Request, Response } from "express"
import cors from "cors"
import { setupRoutes } from "./routes"
import { TodoController, TodoService, TodoRepository } from "./todo"
import { ProtoGrpcType } from "./todo/generated-grpc/todo"
import { TodoControllerGRPC } from "./todo/grpc_controller"
import { PostgresJsDatabase } from "drizzle-orm/postgres-js"
import { logger } from "./middlewares"

function startServerHTTP(cfg: AppConfig, db: PostgresJsDatabase<typeof schema>) {
	const app = express()
	app.use(express.json())
	app.use(cors())
	app.use(logger)

	const todoCtrl = new TodoController(new TodoService(new TodoRepository(db)))
	setupRoutes(app, todoCtrl)

	app.get("/", (req: Request, res: Response) => {
		console.log(req.headers)
		res.send("service is up and running")
	})

	const port = cfg.PORT
	app.listen(port, () => {
		console.log(`listening on port http://localhost:${port}`)
	})
}

function startServerGRPC(cfg: AppConfig, db: PostgresJsDatabase<typeof schema>) {
	const pkgDef = protoLoader.loadSync("./protos/todo.proto")
	const proto = grpc.loadPackageDefinition(pkgDef) as unknown as ProtoGrpcType

	const server = new grpc.Server({
		interceptors: [loggerInterceptor],
	})
	const reflection = new ReflectionService(pkgDef)
	reflection.addToServer(server)

	const todoCtrl = new TodoControllerGRPC(new TodoService(new TodoRepository(db)))
	server.addService(proto.todo.Todo.service, todoCtrl)

	const port = cfg.PORT_GRPC
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

const appConfig = setupConfig()
const db = setupDB(appConfig.DATABASE_URL)

startServerHTTP(appConfig, db)
startServerGRPC(appConfig, db)
