import { Request, Response } from "express";
import { FinishCustomServiceService } from "../../services/CustomService/FinishCustomSvcService";

export class FinishCustomServiceController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const finishCustomServiceService = new FinishCustomServiceService();

    const response = await finishCustomServiceService.execute(id);
    return res.json(response);
  }
}
