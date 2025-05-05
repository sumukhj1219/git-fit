import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "~/server/api/trpc";

export const getApiKeys = protectedProcedure.query(async({ctx})=>{
    try {
        const key = await ctx.db.apiKey.findFirst({
            where:{
                userId:ctx.session.user.id,
                isActive:true
            },
            orderBy:{
                createdAt:"desc"
            }
        })

        return key
    } catch (error) {
        throw new TRPCError({
            code:"INTERNAL_SERVER_ERROR"
        })
    }
})