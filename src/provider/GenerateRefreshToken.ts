import dayjs from "dayjs";

import { prismaClient } from "../prisma/PrismaClient";

class GenerateRefreshToken {
  async execute(u_id: number) {
    try {
      const expiresIn = dayjs().add(1, "day").unix();

      const generateRefreshToken = await prismaClient.refreshToken.create({
        data: {
          u_id,
          expiresIn,
        },
      });

      return generateRefreshToken;
    } catch (err) {
      console.log(err);
    }
  }
}

export { GenerateRefreshToken };
