import { PrismaClient } from "@prisma/client/extension";

export const prismaClient = new PrismaClient();

//introduce singleton here