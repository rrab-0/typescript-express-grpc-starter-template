import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoClient as _todo_TodoClient, TodoDefinition as _todo_TodoDefinition } from './todo/Todo';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  todo: {
    CreateTodoRequest: MessageTypeDefinition
    CreateTodoResponse: MessageTypeDefinition
    DeleteTodoResponse: MessageTypeDefinition
    GetTodoResponse: MessageTypeDefinition
    GetTodosRequest: MessageTypeDefinition
    GetTodosResponse: MessageTypeDefinition
    IdRequest: MessageTypeDefinition
    Todo: SubtypeConstructor<typeof grpc.Client, _todo_TodoClient> & { service: _todo_TodoDefinition }
    TodoSchema: MessageTypeDefinition
    UpdateTodoRequest: MessageTypeDefinition
    UpdateTodoResponse: MessageTypeDefinition
  }
}

