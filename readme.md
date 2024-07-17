# node-express-grpc-ts-drizzle-zod starter template

## generate grpc-js with ts files from protos (v2)

-   usage [here](https://github.com/grpc/grpc-node/tree/master/packages/proto-loader#example-usage)

-   usage with npx

```
npx proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto
```

#### v2 is better because:

-   easier to use
-   fast refresh time is faster (don't know why)
-   generates actual `.ts` files instead of `.d.ts`
-   non set values are actually not included in the request/response
-   able to do

```
const todoSchema: TodoSchema[] = todosRes.map((todo) => {
    return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
    } as TodoSchema
})
callback(null, { todos: todoSchema })
```

instead of

```
const todos = todosRes.map((todo) => {
    const todoSchema = new TodoSchema()
    todoSchema.setId(todo.id)
    todoSchema.setTitle(todo.title)
    todoSchema.setCompleted(todo.completed)
    if (todo.description) {
        todoSchema.setDescription(todo.description)
    }

    return todoSchema
})

const res = new GetTodosResponse()
res.setTodosList(todos)
callback(null, res)
```

## generate grpc-js with ts files from protos (v1)

make sure to install these stuff

```
npm i @grpc/grpc-js @grpc/proto-loader grpc-tools # grpc-tools so you can use "npx grpc_tools_node_protoc" instead of "protoc"
npm i grpc_tools_node_protoc_ts --save-dev # for ts generation
```

go to protos dir (so generated files are in generated-grpc folder)

```
cd protos
```

generate grpc-js files

```
npx grpc_tools_node_protoc `
    --js_out=import_style=commonjs,binary:../src/todo/generated-grpc `
    --grpc_out=grpc_js:../src/todo/generated-grpc `
    todo.proto
```

then generate the ts files (the `\` is important because im using `protoc-gen-ts.cmd`)

```
npx grpc_tools_node_protoc `
    --plugin=protoc-gen-ts=..\node_modules\.bin\protoc-gen-ts.cmd `
    --ts_out=grpc_js:..\src\todo\generated-grpc `
    todo.proto
```

# todos

-   [ ] add tests for controllers
-   [ ] add logging middleware
    -   [ ] grpc
    -   [x] http
-   [x] implement grpc_controller
-   [x] change to dynamic proto generation because apparently proto-loader has native ts support so static generation is not needed [details here](https://github.com/grpc/grpc-node/tree/master/packages/proto-loader)
-   [x] handle undefined values in grpc req/res, simply ignoring empty values is not enough
-   [x] make it so grpc ignore empty request/response values [possible solution](https://github.com/grpc/grpc-node/issues/2362)
-   [x] add validation for controller requests
-   [x] add config.ts for app-wide config
