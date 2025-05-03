import { createTRPCRouter } from "../../trpc";
import { generateCommit } from "./procedures/generate-commit";


export const toolsRouter = createTRPCRouter({
    generateCommit,
    
})