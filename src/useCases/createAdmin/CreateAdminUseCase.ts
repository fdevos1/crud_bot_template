import { prismaClient } from "../../prisma/PrismaClient";
import { hash } from "bcrypt";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateAdminUseCase {
  async execute({ name, email, password }: IUserRequest) {
    const userAlreadyExist = await prismaClient.admin.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExist) {
      throw new Error("Usuário já existe");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.admin.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });

    return user;
  }
}
