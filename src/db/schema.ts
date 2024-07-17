import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core"

export const todos = pgTable("todos", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 256 }).notNull(),
	description: varchar("description", { length: 256 }),
	completed: boolean("completed").default(false).notNull(),
})

export type Todo = typeof todos.$inferSelect
export type NewTodo = typeof todos.$inferInsert
