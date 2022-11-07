import { prismaClient } from "../../prisma/PrismaClient";

export class GetGroupService {
  async execute() {
    const group = await prismaClient.groups.findMany();

    return group;
  }
}
