import { prismaClient } from "../../prisma/PrismaClient";

export class CreateMessageService {
  async execute(message_text: string, user_cellphone: string) {
    const message = await prismaClient.userMessage.create({
      data: {
        message_text,
        user_cellphone,
      },
    });

    return message;
  }
}
