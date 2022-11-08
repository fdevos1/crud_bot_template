import { Request, Response } from "express";
import { GetWaInfosService } from "../../services/Groups/GetWaInfosService";

export class GetWaInfosController {
  async handle(req: Request, res: Response) {
    const { group_id, wa_group_id } = req.body;
    const getWaInfosService = new GetWaInfosService();

    const response = await getWaInfosService.execute(group_id, wa_group_id);
  }
}
