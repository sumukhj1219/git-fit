import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { toolsRouter } from "./routers/tools";
import { userRouter } from "./routers/users";
import { apiRouter } from "./routers/apis";
import { cmdRouter } from "./routers/cmd";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tools:toolsRouter,
  user:userRouter,
  apiKey:apiRouter,
  cmd:cmdRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
