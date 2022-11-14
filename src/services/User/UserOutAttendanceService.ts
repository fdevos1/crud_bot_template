import { prismaClient } from "../../prisma/PrismaClient";

export class UserOutAttendanceService {
  async execute(cellphone: string) {
    const user = await prismaClient.user.update({
      where: {
        cellphone,
      },
      data: {
        on_attendance: false,
      },
    });

    return user;
  }
}
