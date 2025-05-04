import { TRPCError } from "@trpc/server";
import { protectedProcedure } from "~/server/api/trpc";

export const getPlan = protectedProcedure.query(async ({ ctx }) => {
  try {
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        Plan: true,
        Subscription: {
          where: {
            status: "active",
            currentPeriodEnd: {
              gte: new Date(),
            },
          },
        },
      },
    });

    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const isProUser = user.Plan?.name !== "Free" || (user.Subscription?.length ?? 0) > 0;

    return {
      plan: user.Plan,
      isProUser,
    };
  } catch (error) {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
  }
});
