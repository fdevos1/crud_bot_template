import { Request, Response } from "express";
import { GetCustomServiceService } from "../../services/CustomService/GetCustomSvcService";

export class GetCustomServiceController {
  async handle(req: Request, res: Response) {
    const getCustomService = new GetCustomServiceService();

    const response = await getCustomService.execute();

    return res.json(response);
  }
}
