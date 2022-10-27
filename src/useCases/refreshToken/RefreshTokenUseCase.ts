import dayjs from "dayjs";
import { prismaClient } from "../../prisma/PrismaClient";
import { GenerateTokenProvider } from "../../provider/GenerateToken";

export class RefreshTokenUseCase {
  async execute(refresh_token: string) {
    const refreshToken = await prismaClient.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) {
      throw new Error("Refresh token inválido!");
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(refreshToken.u_id);

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    );

    if (refreshTokenExpired) {
      await prismaClient.refreshToken.deleteMany({
        where: {
          u_id: refreshToken.u_id,
        },
      });

      const generateRefreshToken = new GenerateTokenProvider();
      const newRefreshToken = await generateRefreshToken.execute(
        refreshToken.u_id
      );

      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}
