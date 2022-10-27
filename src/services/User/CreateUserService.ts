import { prismaClient } from "../../prisma/PrismaClient";

export class CreateUserService {
  async execute(name: string, cellphone: string, wa_id: string) {
    const user = await prismaClient.user.create({
      data: {
        name,
        cellphone,
        wa_id,
      },
    });

    return user;
  }
}
