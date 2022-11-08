import { Request, Response } from "express";
import { FinishCustomServiceService } from "../../services/CustomService/FinishCustomServiceService";

export class FinishCustomServiceController {
  async handle(req: Request, res: Response) {
    const { finished_at } = req.body;
    const { id } = req.params;

    const finishCustomServiceService = new FinishCustomServiceService();

    const response = await finishCustomServiceService.execute(finished_at, id);
    return res.json(response);
  }
}
