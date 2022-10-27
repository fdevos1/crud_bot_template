import { prismaClient } from "../../prisma/PrismaClient";

export class CreateAttendantService {
  async execute(
    name: string,
    cellphone: string,
    wa_id: string,
    role_id: number
  ) {
    const attendant = await prismaClient.attendant.create({
      data: {
        name,
        cellphone,
        wa_id,
        role_id,
      },
    });

    return attendant;
  }
}
