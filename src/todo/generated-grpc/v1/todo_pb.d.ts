// package: todo
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class IdRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): IdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdRequest;
    static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
    export type AsObject = {
        id: number,
    }
}

export class TodoSchema extends jspb.Message { 
    getId(): number;
    setId(value: number): TodoSchema;
    getTitle(): string;
    setTitle(value: string): TodoSchema;
    getDescription(): string;
    setDescription(value: string): TodoSchema;
    getCompleted(): boolean;
    setCompleted(value: boolean): TodoSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoSchema.AsObject;
    static toObject(includeInstance: boolean, msg: TodoSchema): TodoSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoSchema;
    static deserializeBinaryFromReader(message: TodoSchema, reader: jspb.BinaryReader): TodoSchema;
}

export namespace TodoSchema {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        completed: boolean,
    }
}

export class GetTodosRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetTodosRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTodosRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTodosRequest): GetTodosRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTodosRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTodosRequest;
    static deserializeBinaryFromReader(message: GetTodosRequest, reader: jspb.BinaryReader): GetTodosRequest;
}

export namespace GetTodosRequest {
    export type AsObject = {
        limit: number,
    }
}

export class GetTodosResponse extends jspb.Message { 
    clearTodosList(): void;
    getTodosList(): Array<TodoSchema>;
    setTodosList(value: Array<TodoSchema>): GetTodosResponse;
    addTodos(value?: TodoSchema, index?: number): TodoSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTodosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTodosResponse): GetTodosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTodosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTodosResponse;
    static deserializeBinaryFromReader(message: GetTodosResponse, reader: jspb.BinaryReader): GetTodosResponse;
}

export namespace GetTodosResponse {
    export type AsObject = {
        todosList: Array<TodoSchema.AsObject>,
    }
}

export class GetTodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): TodoSchema | undefined;
    setTodo(value?: TodoSchema): GetTodoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTodoResponse): GetTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTodoResponse;
    static deserializeBinaryFromReader(message: GetTodoResponse, reader: jspb.BinaryReader): GetTodoResponse;
}

export namespace GetTodoResponse {
    export type AsObject = {
        todo?: TodoSchema.AsObject,
    }
}

export class CreateTodoRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): CreateTodoRequest;
    getTitle(): string;
    setTitle(value: string): CreateTodoRequest;
    getDescription(): string;
    setDescription(value: string): CreateTodoRequest;
    getCompleted(): boolean;
    setCompleted(value: boolean): CreateTodoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
    static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        completed: boolean,
    }
}

export class CreateTodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): TodoSchema | undefined;
    setTodo(value?: TodoSchema): CreateTodoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoResponse): CreateTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoResponse;
    static deserializeBinaryFromReader(message: CreateTodoResponse, reader: jspb.BinaryReader): CreateTodoResponse;
}

export namespace CreateTodoResponse {
    export type AsObject = {
        todo?: TodoSchema.AsObject,
    }
}

export class UpdateTodoRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateTodoRequest;
    getTitle(): string;
    setTitle(value: string): UpdateTodoRequest;
    getDescription(): string;
    setDescription(value: string): UpdateTodoRequest;
    getCompleted(): boolean;
    setCompleted(value: boolean): UpdateTodoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTodoRequest): UpdateTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest;
    static deserializeBinaryFromReader(message: UpdateTodoRequest, reader: jspb.BinaryReader): UpdateTodoRequest;
}

export namespace UpdateTodoRequest {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        completed: boolean,
    }
}

export class UpdateTodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): TodoSchema | undefined;
    setTodo(value?: TodoSchema): UpdateTodoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTodoResponse): UpdateTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTodoResponse;
    static deserializeBinaryFromReader(message: UpdateTodoResponse, reader: jspb.BinaryReader): UpdateTodoResponse;
}

export namespace UpdateTodoResponse {
    export type AsObject = {
        todo?: TodoSchema.AsObject,
    }
}

export class DeleteTodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): TodoSchema | undefined;
    setTodo(value?: TodoSchema): DeleteTodoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTodoResponse): DeleteTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTodoResponse;
    static deserializeBinaryFromReader(message: DeleteTodoResponse, reader: jspb.BinaryReader): DeleteTodoResponse;
}

export namespace DeleteTodoResponse {
    export type AsObject = {
        todo?: TodoSchema.AsObject,
    }
}
