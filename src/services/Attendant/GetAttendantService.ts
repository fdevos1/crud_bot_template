import { prismaClient } from "../../prisma/PrismaClient";

export class GetAttendantService {
  async execute() {
    const attendant = await prismaClient.attendant.findMany();

    return attendant;
  }
}
