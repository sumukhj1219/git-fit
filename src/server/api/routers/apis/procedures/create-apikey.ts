import { protectedProcedure } from "~/server/api/trpc";
import { createApiKeyForUser } from "../utils";

export const createApikey = protectedProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.session.user.id
    const existingKey = await ctx.db.apiKey.findFirst({
        where: {
            userId,
            isActive: true
        }
    })

    if (existingKey) {
        return { message: "API key already exists", key: existingKey.key }
    }

    const apiKey = await createApiKeyForUser(userId)

    return { message: "API key created successfully", key: apiKey.key }
})