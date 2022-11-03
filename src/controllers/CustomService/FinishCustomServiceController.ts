import { Request, Response } from "express";
import { prismaClient } from "../../prisma/PrismaClient";
import { FinishCustomServiceService } from "../../services/CustomService/FinishCustomServiceService";

export class FinishCustomServiceController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const finishCustomServiceService = new FinishCustomServiceService();

    const response = await finishCustomServiceService.execute(id);
    return res.json(response);
  }
}
