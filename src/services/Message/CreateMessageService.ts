import { prismaClient } from "../../prisma/PrismaClient";

export class CreateMessageService {
  async execute(
    text: string,
    custom_service_id: string,
    user_cellphone: string
  ) {
    const message = await prismaClient.message.create({
      data: {
        text,
        custom_service_id,
        user_cellphone,
      },
    });

    return message;
  }
}
