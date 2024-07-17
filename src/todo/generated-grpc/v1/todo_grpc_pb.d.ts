// package: todo
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as todo_pb from "./todo_pb";

interface ITodoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTodos: ITodoService_IGetTodos;
    getTodoById: ITodoService_IGetTodoById;
    createTodo: ITodoService_ICreateTodo;
    updateTodoById: ITodoService_IUpdateTodoById;
    deleteTodoById: ITodoService_IDeleteTodoById;
}

interface ITodoService_IGetTodos extends grpc.MethodDefinition<todo_pb.GetTodosRequest, todo_pb.GetTodosResponse> {
    path: "/todo.Todo/GetTodos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.GetTodosRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.GetTodosRequest>;
    responseSerialize: grpc.serialize<todo_pb.GetTodosResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.GetTodosResponse>;
}
interface ITodoService_IGetTodoById extends grpc.MethodDefinition<todo_pb.IdRequest, todo_pb.GetTodoResponse> {
    path: "/todo.Todo/GetTodoById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.IdRequest>;
    responseSerialize: grpc.serialize<todo_pb.GetTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.GetTodoResponse>;
}
interface ITodoService_ICreateTodo extends grpc.MethodDefinition<todo_pb.CreateTodoRequest, todo_pb.CreateTodoResponse> {
    path: "/todo.Todo/CreateTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.CreateTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.CreateTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.CreateTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.CreateTodoResponse>;
}
interface ITodoService_IUpdateTodoById extends grpc.MethodDefinition<todo_pb.UpdateTodoRequest, todo_pb.UpdateTodoResponse> {
    path: "/todo.Todo/UpdateTodoById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.UpdateTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.UpdateTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.UpdateTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.UpdateTodoResponse>;
}
interface ITodoService_IDeleteTodoById extends grpc.MethodDefinition<todo_pb.IdRequest, todo_pb.DeleteTodoResponse> {
    path: "/todo.Todo/DeleteTodoById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.IdRequest>;
    responseSerialize: grpc.serialize<todo_pb.DeleteTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.DeleteTodoResponse>;
}

export const TodoService: ITodoService;

export interface ITodoServer extends grpc.UntypedServiceImplementation {
    getTodos: grpc.handleUnaryCall<todo_pb.GetTodosRequest, todo_pb.GetTodosResponse>;
    getTodoById: grpc.handleUnaryCall<todo_pb.IdRequest, todo_pb.GetTodoResponse>;
    createTodo: grpc.handleUnaryCall<todo_pb.CreateTodoRequest, todo_pb.CreateTodoResponse>;
    updateTodoById: grpc.handleUnaryCall<todo_pb.UpdateTodoRequest, todo_pb.UpdateTodoResponse>;
    deleteTodoById: grpc.handleUnaryCall<todo_pb.IdRequest, todo_pb.DeleteTodoResponse>;
}

export interface ITodoClient {
    getTodos(request: todo_pb.GetTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    getTodos(request: todo_pb.GetTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    getTodos(request: todo_pb.GetTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    getTodoById(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoResponse) => void): grpc.ClientUnaryCall;
    getTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoResponse) => void): grpc.ClientUnaryCall;
    getTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    updateTodoById(request: todo_pb.UpdateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    updateTodoById(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    updateTodoById(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodoById(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
}

export class TodoClient extends grpc.Client implements ITodoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTodos(request: todo_pb.GetTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodos(request: todo_pb.GetTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodos(request: todo_pb.GetTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodoById(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoResponse) => void): grpc.ClientUnaryCall;
    public getTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoResponse) => void): grpc.ClientUnaryCall;
    public getTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodoById(request: todo_pb.UpdateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodoById(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodoById(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodoById(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodoById(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
}
