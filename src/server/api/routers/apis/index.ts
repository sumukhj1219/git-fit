import { createTRPCRouter } from "../../trpc";
import { createApikey } from "./procedures/create-apikey";

export const apiRouter = createTRPCRouter({
    createApikey
})