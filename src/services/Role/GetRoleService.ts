import { prismaClient } from "../../prisma/PrismaClient";

export class GetRoleService {
  async execute() {
    const role = await prismaClient.role.findMany();

    return role;
  }
}
