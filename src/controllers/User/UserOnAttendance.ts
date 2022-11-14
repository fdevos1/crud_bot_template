import { Request, Response } from "express";

import { UserOnAttendanceService } from "../../services/User/UserOnAttendanceService";

export class UserOnAttendanceController {
  async handle(req: Request, res: Response) {
    const { cellphone } = req.body;

    const service = new UserOnAttendanceService();

    const response = await service.execute(cellphone);

    return res.json(response);
  }
}
