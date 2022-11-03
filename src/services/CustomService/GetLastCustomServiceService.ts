import { prismaClient } from "../../prisma/PrismaClient";

export class GetLastCustomServiceService {
  async execute(user_cellphone: string) {
    const customService = await prismaClient.customService.findFirst({
      where: {
        user_cellphone,
        finished_at: null,
      },
    });

    return customService;
  }
}
