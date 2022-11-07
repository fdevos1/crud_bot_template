import { prismaClient } from "../../prisma/PrismaClient";

export class CreateGroupService {
  async execute(group_name: string, subject: string, type: number) {
    const group = await prismaClient.groups.create({
      data: {
        group_name,
        subject,
        type,
      },
    });

    return group;
  }
}
