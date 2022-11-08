import { prismaClient } from "../../prisma/PrismaClient";

export class GetWaInfosService {
  async execute(group_id: number, wa_group_id: string) {
    const group = await prismaClient.groups.update({
      where: {
        group_id,
      },
      data: {
        wa_group_id,
        created_on_wa: true,
      },
    });

    return group;
  }
}
