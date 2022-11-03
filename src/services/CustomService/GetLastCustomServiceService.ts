import { prismaClient } from "../../prisma/PrismaClient";

export class GetLastCustomServiceService {
  async execute(u_id: string) {
    const customService = await prismaClient.customService.findFirst({
      where: {
        u_id,
        finished_at: null,
      },
    });

    return customService;
  }
}
