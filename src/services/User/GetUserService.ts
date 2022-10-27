import { prismaClient } from "../../prisma/PrismaClient";

export class GetUserService {
  async execute() {
    const user = await prismaClient.user.findMany();

    return user;
  }
}
