import { prismaClient } from "../../prisma/PrismaClient";

export class UserOnTransmissionListService {
  async execute(cellphone: string) {
    const user = await prismaClient.user.update({
      where: {
        cellphone,
      },
      data: {
        on_transmission_list: true,
      },
    });

    return user;
  }
}
