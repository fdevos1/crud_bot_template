import { prismaClient } from "../../prisma/PrismaClient";

export class CreateCustomServiceService {
  async execute(user_cellphone: string) {
    const customService = await prismaClient.customService.create({
      data: {
        user_cellphone,
      },
    });

    return customService;
  }
}
