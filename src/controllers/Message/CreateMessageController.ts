import { Request, Response } from "express";
import { prismaClient } from "../../prisma/PrismaClient";
import { CreateMessageService } from "../../services/Message/CreateMessageService";

export class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { text, wa_id } = req.body;

    const user = await prismaClient.user.findFirst({
      where: {
        wa_id,
      },
    });

    if (user) {
      const createMessageService = new CreateMessageService();

      const customService = await prismaClient.customService.findFirst({
        where: {
          u_id: user.user_id,
        },
      });

      const response = await createMessageService.execute(
        text,
        customService!.id,
        user.user_id
      );

      return res.json(response);
    }
  }
}
