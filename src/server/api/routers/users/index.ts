import { createTRPCRouter } from "../../trpc";
import { deleteAccount } from "./procedures/delete-account";

export const userRouter = createTRPCRouter({
    deleteAccount
})