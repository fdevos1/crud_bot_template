import { prismaClient } from "../../prisma/PrismaClient";

export class CreateRoleService {
  async execute(role_name: string) {
    const role = await prismaClient.role.create({
      data: {
        role_name,
      },
    });

    return role;
  }
}
