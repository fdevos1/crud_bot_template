import { prismaClient } from "../../prisma/PrismaClient";

export class FinishCustomServiceService {
  async execute(id: string) {
    const customService = await prismaClient.customService.findFirst({
      where: {
        id,
      },
      data: {
        finished_at: Date.now(),
      },
    });

    return customService;
  }
}
