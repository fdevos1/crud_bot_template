import { compare } from "bcrypt";
import { prismaClient } from "../../prisma/PrismaClient";
import { sign } from "jsonwebtoken";
import { stringify } from "querystring";

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IRequest) {
    const userAlreadyExist = await prismaClient.admin.findFirst({
      where: {
        email,
      },
    });

    if (!userAlreadyExist) {
      throw new Error("Usuário ou senha está incorreto!");
    }

    const passwordMatch = compare(password, userAlreadyExist.password);

    if (!passwordMatch) {
      throw new Error("Usuário ou senha está incorreto!");
    }

    const token = sign({}, "97e8ec6e-f6cd-43c8-a338-77fddc67a086", {
      subject: userAlreadyExist.email,
      expiresIn: "20s",
    });

    return { token };
  }
}
