import { Request, Response } from "express";
import { UserOutAttendanceService } from "../../services/User/UserOutAttendanceService";

export class UserOutAttendanceController {
  async handle(req: Request, res: Response) {
    const { cellphone } = req.body;

    const service = new UserOutAttendanceService();

    const response = await service.execute(cellphone);

    return res.json(response);
  }
}
