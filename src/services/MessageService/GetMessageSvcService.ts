import { prismaClient } from "../../prisma/PrismaClient";

export class GetMessageSvcService {
  async execute() {
    const message_service = await prismaClient.messageService.findMany();

    return message_service;
  }
}
