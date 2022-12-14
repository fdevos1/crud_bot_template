import { prismaClient } from "../../prisma/PrismaClient";

export class CreateMessageServiceService {
  async execute(text: string) {
    const message_service = await prismaClient.messageService.create({
      data: {
        text,
      },
    });

    return message_service;
  }
}
