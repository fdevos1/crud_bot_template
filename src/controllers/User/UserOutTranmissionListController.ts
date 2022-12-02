import { Request, Response } from "express";

import { UserOutTransmissionListService } from "../../services/User/UserOutTransmissionList";

export class UserOutTransmissionListController {
  async handle(req: Request, res: Response) {
    const { cellphone } = req.params;

    const service = new UserOutTransmissionListService();

    const response = await service.execute(cellphone);

    return res.json(response);
  }
}
