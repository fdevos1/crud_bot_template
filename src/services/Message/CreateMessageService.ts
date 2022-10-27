import { prismaClient } from "../../prisma/PrismaClient";

export class CreateMessageService {
  async execute(text: string, custom_service_id: string, u_id: number) {
    const message = await prismaClient.message.create({
      data: {
        text,
        custom_service_id,
        u_id,
      },
    });

    return message;
  }
}
