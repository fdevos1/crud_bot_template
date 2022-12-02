import { prismaClient } from "../../prisma/PrismaClient";

export class UserOutTransmissionListService {
  async execute(cellphone: string) {
    const UserOutTransmissionList = await prismaClient.user.update({
      where: {
        cellphone,
      },
      data: {
        on_transmission_list: false,
      },
    });

    return UserOutTransmissionList;
  }
}
