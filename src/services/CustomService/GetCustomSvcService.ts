import { prismaClient } from "../../prisma/PrismaClient";

export class GetCustomServiceService {
  async execute() {
    const customService = await prismaClient.customService.findMany();

    return customService;
  }
}
