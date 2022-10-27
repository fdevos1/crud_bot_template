import { Request, Response } from "express";

import { GetAttendantService } from "../../services/Attendant/GetAttendantService";

export class GetAttendantController {
  async handle(req: Request, res: Response) {
    const getAttendant = new GetAttendantService();

    const response = await getAttendant.execute();

    return res.json(response);
  }
}
