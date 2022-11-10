import { prismaClient } from "../../prisma/PrismaClient";

export class GetLastCustomServiceService {
  async execute(user_cellphone: string) {
    const lastService = await prismaClient.customService.findFirst({
      where: {
        user_cellphone,
      },
    });

    return lastService;
  }
}
