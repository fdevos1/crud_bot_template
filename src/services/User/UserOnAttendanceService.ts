import { prismaClient } from "../../prisma/PrismaClient";

export class UserOnAttendanceService {
  async execute(cellphone: string) {
    const user = await prismaClient.user.update({
      where: {
        cellphone,
      },
      data: {
        on_attendance: true,
      },
    });

    return user;
  }
}
