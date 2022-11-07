import { Request, Response } from "express";
import { GetGroupService } from "../../services/Groups/GetGroupService";

export class GetGroupController {
  async handle(req: Request, res: Response) {
    const getGroupService = new GetGroupService();

    const response = await getGroupService.execute();

    return res.json(response);
  }
}
