// Original file: todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTodoRequest as _todo_CreateTodoRequest, CreateTodoRequest__Output as _todo_CreateTodoRequest__Output } from '../todo/CreateTodoRequest';
import type { CreateTodoResponse as _todo_CreateTodoResponse, CreateTodoResponse__Output as _todo_CreateTodoResponse__Output } from '../todo/CreateTodoResponse';
import type { DeleteTodoResponse as _todo_DeleteTodoResponse, DeleteTodoResponse__Output as _todo_DeleteTodoResponse__Output } from '../todo/DeleteTodoResponse';
import type { GetTodoResponse as _todo_GetTodoResponse, GetTodoResponse__Output as _todo_GetTodoResponse__Output } from '../todo/GetTodoResponse';
import type { GetTodosRequest as _todo_GetTodosRequest, GetTodosRequest__Output as _todo_GetTodosRequest__Output } from '../todo/GetTodosRequest';
import type { GetTodosResponse as _todo_GetTodosResponse, GetTodosResponse__Output as _todo_GetTodosResponse__Output } from '../todo/GetTodosResponse';
import type { IdRequest as _todo_IdRequest, IdRequest__Output as _todo_IdRequest__Output } from '../todo/IdRequest';
import type { UpdateTodoRequest as _todo_UpdateTodoRequest, UpdateTodoRequest__Output as _todo_UpdateTodoRequest__Output } from '../todo/UpdateTodoRequest';
import type { UpdateTodoResponse as _todo_UpdateTodoResponse, UpdateTodoResponse__Output as _todo_UpdateTodoResponse__Output } from '../todo/UpdateTodoResponse';

export interface TodoClient extends grpc.Client {
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  DeleteTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  DeleteTodoById(argument: _todo_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  DeleteTodoById(argument: _todo_IdRequest, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodoById(argument: _todo_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  deleteTodoById(argument: _todo_IdRequest, callback: grpc.requestCallback<_todo_DeleteTodoResponse__Output>): grpc.ClientUnaryCall;
  
  GetTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  GetTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  GetTodoById(argument: _todo_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  GetTodoById(argument: _todo_IdRequest, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_IdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_IdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  getTodoById(argument: _todo_IdRequest, callback: grpc.requestCallback<_todo_GetTodoResponse__Output>): grpc.ClientUnaryCall;
  
  GetTodos(argument: _todo_GetTodosRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  GetTodos(argument: _todo_GetTodosRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  GetTodos(argument: _todo_GetTodosRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  GetTodos(argument: _todo_GetTodosRequest, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  getTodos(argument: _todo_GetTodosRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  getTodos(argument: _todo_GetTodosRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  getTodos(argument: _todo_GetTodosRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  getTodos(argument: _todo_GetTodosRequest, callback: grpc.requestCallback<_todo_GetTodosResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateTodoById(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  UpdateTodoById(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  UpdateTodoById(argument: _todo_UpdateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  UpdateTodoById(argument: _todo_UpdateTodoRequest, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodoById(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodoById(argument: _todo_UpdateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodoById(argument: _todo_UpdateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodoById(argument: _todo_UpdateTodoRequest, callback: grpc.requestCallback<_todo_UpdateTodoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoHandlers extends grpc.UntypedServiceImplementation {
  CreateTodo: grpc.handleUnaryCall<_todo_CreateTodoRequest__Output, _todo_CreateTodoResponse>;
  
  DeleteTodoById: grpc.handleUnaryCall<_todo_IdRequest__Output, _todo_DeleteTodoResponse>;
  
  GetTodoById: grpc.handleUnaryCall<_todo_IdRequest__Output, _todo_GetTodoResponse>;
  
  GetTodos: grpc.handleUnaryCall<_todo_GetTodosRequest__Output, _todo_GetTodosResponse>;
  
  UpdateTodoById: grpc.handleUnaryCall<_todo_UpdateTodoRequest__Output, _todo_UpdateTodoResponse>;
  
}

export interface TodoDefinition extends grpc.ServiceDefinition {
  CreateTodo: MethodDefinition<_todo_CreateTodoRequest, _todo_CreateTodoResponse, _todo_CreateTodoRequest__Output, _todo_CreateTodoResponse__Output>
  DeleteTodoById: MethodDefinition<_todo_IdRequest, _todo_DeleteTodoResponse, _todo_IdRequest__Output, _todo_DeleteTodoResponse__Output>
  GetTodoById: MethodDefinition<_todo_IdRequest, _todo_GetTodoResponse, _todo_IdRequest__Output, _todo_GetTodoResponse__Output>
  GetTodos: MethodDefinition<_todo_GetTodosRequest, _todo_GetTodosResponse, _todo_GetTodosRequest__Output, _todo_GetTodosResponse__Output>
  UpdateTodoById: MethodDefinition<_todo_UpdateTodoRequest, _todo_UpdateTodoResponse, _todo_UpdateTodoRequest__Output, _todo_UpdateTodoResponse__Output>
}
