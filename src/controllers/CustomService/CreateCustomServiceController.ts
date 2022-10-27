import { Request, Response } from "express";
import { prismaClient } from "../../prisma/PrismaClient";
import { CreateCustomServiceService } from "../../services/CustomService/CreateCustomServiceService";

export class CreateCustomServiceController {
  async handle(req: Request, res: Response) {
    const { wa_id } = req.body;

    const createCustomServiceService = new CreateCustomServiceService();

    const user = await prismaClient.user.findFirst({
      where: {
        wa_id,
      },
    });

    if (user) {
      const response = await createCustomServiceService.execute(user.user_id);
      return res.json(response);
    }
  }
}
