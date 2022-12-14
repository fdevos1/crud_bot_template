import { prismaClient } from "../../prisma/PrismaClient";

export class GetMessageService {
  async execute() {
    const messages = await prismaClient.userMessage.findMany();

    return messages;
  }
}
