import { createTRPCRouter } from "../../trpc";
import { generateCommit } from "./procedures/commit";

export const cmdRouter = createTRPCRouter({
    generateCommit
})