import { compare } from "bcrypt";
import { prismaClient } from "../../prisma/PrismaClient";
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../provider/GenerateToken";

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

    const generateToken = new GenerateTokenProvider();
    const token = await generateToken.execute(userAlreadyExist.id);

    await prismaClient.refreshToken.deleteMany({
      where: {
        u_id: userAlreadyExist.id,
      },
    });

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(
      userAlreadyExist.id
    );

    return { token, refreshToken };
  }
}
