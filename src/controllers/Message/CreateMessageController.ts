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

      const response = await createMessageService.execute(text, cellphone);

      return res.json(response);
    }
  }
}
