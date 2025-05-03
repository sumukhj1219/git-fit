import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "~/server/api/trpc";

export const deleteAccount = protectedProcedure.mutation(async ({ ctx }) => {
    try {
        await ctx.db.user.delete({
            where: {
                id: ctx.session.user.id
            }
        })
    } catch (error) {
        throw new TRPCError({
            code: "UNAUTHORIZED"
        })
    }
})