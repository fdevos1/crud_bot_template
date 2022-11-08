import { prismaClient } from "../../prisma/PrismaClient";

export class FinishCustomServiceService {
  async execute(id: string) {
    const now = new Date();

    const customService = await prismaClient.customService.update({
      where: {
        id,
      },
      data: {
        finished_at: now,
      },
    });

    return customService;
  }
}
