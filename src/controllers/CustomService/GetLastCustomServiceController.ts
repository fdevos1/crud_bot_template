import { Request, Response } from "express";
import { GetLastCustomServiceService } from "../../services/CustomService/GetLastCustomSvcService";

export class GetLastCustomServiceController {
  async handle(req: Request, res: Response) {
    const { cellphone } = req.params;
    const getCustomService = new GetLastCustomServiceService();

    const response = await getCustomService.execute(cellphone);

    return res.json(response);
  }
}
