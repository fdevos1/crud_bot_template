import { Request, Response } from "express";
import { prismaClient } from "../../prisma/PrismaClient";
import { CreateCustomServiceService } from "../../services/CustomService/CreateCustomServiceService";

export class CreateCustomServiceController {
  async handle(req: Request, res: Response) {
    const { cellphone } = req.body;

    const createCustomServiceService = new CreateCustomServiceService();

    const user = await prismaClient.user.findFirst({
      where: {
        cellphone,
      },
    });

    if (user) {
      const response = await createCustomServiceService.execute(user.cellphone);
      return res.json(response);
    }
  }
}
