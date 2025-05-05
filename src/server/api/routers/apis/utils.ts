import { v4 as uuidv4 } from "uuid";
import { db } from "~/server/db";

export const generateApiKey = () => {
  return uuidv4().replace(/-/g, "") + uuidv4().replace(/-/g, "");
};

export const createApiKeyForUser = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { Plan: true },
  });

  // if (!user || user.Plan?.name !== "Pro") {
  //   throw new Error("User must have Pro plan to create API Key");
  // }

  const key = generateApiKey();

  const apiKey = await db.apiKey.create({
    data: {
      key,
      userId,
      isActive: true,
    },
  });

  return apiKey;
};
