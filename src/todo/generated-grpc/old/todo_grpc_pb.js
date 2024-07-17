// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_pb = require('./todo_pb.js');

function serialize_todo_CreateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type todo.CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CreateTodoRequest(buffer_arg) {
  return todo_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_CreateTodoResponse(arg) {
  if (!(arg instanceof todo_pb.CreateTodoResponse)) {
    throw new Error('Expected argument of type todo.CreateTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CreateTodoResponse(buffer_arg) {
  return todo_pb.CreateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_DeleteTodoResponse(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoResponse)) {
    throw new Error('Expected argument of type todo.DeleteTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_DeleteTodoResponse(buffer_arg) {
  return todo_pb.DeleteTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_GetTodoResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodoResponse)) {
    throw new Error('Expected argument of type todo.GetTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_GetTodoResponse(buffer_arg) {
  return todo_pb.GetTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_GetTodosRequest(arg) {
  if (!(arg instanceof todo_pb.GetTodosRequest)) {
    throw new Error('Expected argument of type todo.GetTodosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_GetTodosRequest(buffer_arg) {
  return todo_pb.GetTodosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_GetTodosResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodosResponse)) {
    throw new Error('Expected argument of type todo.GetTodosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_GetTodosResponse(buffer_arg) {
  return todo_pb.GetTodosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_IdRequest(arg) {
  if (!(arg instanceof todo_pb.IdRequest)) {
    throw new Error('Expected argument of type todo.IdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_IdRequest(buffer_arg) {
  return todo_pb.IdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UpdateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.UpdateTodoRequest)) {
    throw new Error('Expected argument of type todo.UpdateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UpdateTodoRequest(buffer_arg) {
  return todo_pb.UpdateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UpdateTodoResponse(arg) {
  if (!(arg instanceof todo_pb.UpdateTodoResponse)) {
    throw new Error('Expected argument of type todo.UpdateTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UpdateTodoResponse(buffer_arg) {
  return todo_pb.UpdateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoService = exports.TodoService = {
  getTodos: {
    path: '/todo.Todo/GetTodos',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.GetTodosRequest,
    responseType: todo_pb.GetTodosResponse,
    requestSerialize: serialize_todo_GetTodosRequest,
    requestDeserialize: deserialize_todo_GetTodosRequest,
    responseSerialize: serialize_todo_GetTodosResponse,
    responseDeserialize: deserialize_todo_GetTodosResponse,
  },
  getTodoById: {
    path: '/todo.Todo/GetTodoById',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.IdRequest,
    responseType: todo_pb.GetTodoResponse,
    requestSerialize: serialize_todo_IdRequest,
    requestDeserialize: deserialize_todo_IdRequest,
    responseSerialize: serialize_todo_GetTodoResponse,
    responseDeserialize: deserialize_todo_GetTodoResponse,
  },
  createTodo: {
    path: '/todo.Todo/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateTodoRequest,
    responseType: todo_pb.CreateTodoResponse,
    requestSerialize: serialize_todo_CreateTodoRequest,
    requestDeserialize: deserialize_todo_CreateTodoRequest,
    responseSerialize: serialize_todo_CreateTodoResponse,
    responseDeserialize: deserialize_todo_CreateTodoResponse,
  },
  updateTodoById: {
    path: '/todo.Todo/UpdateTodoById',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.UpdateTodoRequest,
    responseType: todo_pb.UpdateTodoResponse,
    requestSerialize: serialize_todo_UpdateTodoRequest,
    requestDeserialize: deserialize_todo_UpdateTodoRequest,
    responseSerialize: serialize_todo_UpdateTodoResponse,
    responseDeserialize: deserialize_todo_UpdateTodoResponse,
  },
  deleteTodoById: {
    path: '/todo.Todo/DeleteTodoById',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.IdRequest,
    responseType: todo_pb.DeleteTodoResponse,
    requestSerialize: serialize_todo_IdRequest,
    requestDeserialize: deserialize_todo_IdRequest,
    responseSerialize: serialize_todo_DeleteTodoResponse,
    responseDeserialize: deserialize_todo_DeleteTodoResponse,
  },
};

exports.TodoClient = grpc.makeGenericClientConstructor(TodoService);
