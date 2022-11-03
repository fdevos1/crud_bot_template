import { Request, Response } from "express";
import { prismaClient } from "../../prisma/PrismaClient";
import { CreateMessageService } from "../../services/Message/CreateMessageService";

export class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { text, cellphone } = req.body;

    const user = await prismaClient.user.findFirst({
      where: {
        cellphone,
      },
    });

    if (user) {
      const createMessageService = new CreateMessageService();

      const customService = await prismaClient.customService.findFirst({
        where: {
          user_cellphone: user.cellphone,
        },
      });

      const response = await createMessageService.execute(
        text,
        customService!.id,
        user.cellphone
      );

      return res.json(response);
    }
  }
}
