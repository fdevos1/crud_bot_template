import { Request, Response } from "express";

import { UserOnTransmissionListService } from "../../services/User/UserOnTransmissionList";

export class UserOnTransmissionListController {
  async handle(req: Request, res: Response) {
    const { cellphone } = req.params;

    const service = new UserOnTransmissionListService();

    const response = await service.execute(cellphone);

    return res.json(response);
  }
}
