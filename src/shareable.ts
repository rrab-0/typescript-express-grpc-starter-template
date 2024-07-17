import { z } from "zod"

export const ZodIdRequest = z.object({
	id: z.coerce.number(),
})
