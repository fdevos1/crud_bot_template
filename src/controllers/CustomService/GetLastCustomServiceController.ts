import { Request, Response } from "express";
import { GetLastCustomServiceService } from "../../services/CustomService/GetLastCustomServiceService";

export class GetLastCustomServiceController {
  async handle(req: Request, res: Response) {
    const { cellphone } = req.body;
    const getCustomService = new GetLastCustomServiceService();

    const response = await getCustomService.execute(cellphone);

    return res.json(response);
  }
}
