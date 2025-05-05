import { createTRPCRouter } from "../../trpc";
import { createApikey } from "./procedures/create-apikey";
import { getApiKeys } from "./procedures/get-apikeys";

export const apiRouter = createTRPCRouter({
    createApikey,
    getApiKeys
})