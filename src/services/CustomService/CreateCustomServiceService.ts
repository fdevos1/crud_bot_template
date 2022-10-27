import { prismaClient } from "../../prisma/PrismaClient";

export class CreateCustomServiceService {
  async execute(u_id: number) {
    const customService = await prismaClient.customService.create({
      data: {
        u_id,
      },
    });

    return customService;
  }
}
