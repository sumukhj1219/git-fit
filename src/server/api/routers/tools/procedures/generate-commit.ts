import { TRPCError } from "@trpc/server";
import { z } from "zod";
import generateGeminiResponse from "~/lib/prompt";
import { protectedProcedure } from "~/server/api/trpc";

export const generateCommit = protectedProcedure
  .input(
    z.object({
      message: z.string(),
      commitType: z.string(),
      style: z.string()
    })
  )
  .mutation(async ({ ctx, input }) => {
    try {
      const prompt = `
        You are a GitHub commit message generator. Based on the following commit type and git diff, generate a concise and clear commit message:
        
        Commit Type: ${input.commitType}
        Git Diff:
        ${input.message}
        Commit Style: ${input.style}
      `.trim();

      const response = await generateGeminiResponse(prompt);
      
      return response;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to generate commit message.",
      });
    }
  });
