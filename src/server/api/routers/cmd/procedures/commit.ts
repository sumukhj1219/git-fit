import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { publicProcedure } from "~/server/api/trpc";

export const generateCommit = publicProcedure.input(z.object({ diff: z.string() })).mutation(async ({ ctx, input }) => {
    const authHeader = ctx.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "MISSING API KEY" })
    }

    const apiKey = authHeader.split("Bearer ")[1]?.trim()

    const key = await ctx.db.apiKey.findFirst({
        where: {
            key: apiKey,
            isActive: true
        },
        include: {
            user: true
        }
    })

    if (!key) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid API key" });
    }

    return { message: `Your AI commit message for diff: ${input.diff}` };
})