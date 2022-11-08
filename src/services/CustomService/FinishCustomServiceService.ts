import { prismaClient } from "../../prisma/PrismaClient";

export class FinishCustomServiceService {
  async execute(finished_at: Date, id: string) {
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
