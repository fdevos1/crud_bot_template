import { Request, Response } from "express";
import { CreateAttendantService } from "../../services/Attendant/CreateAttendantService";

export class CreateAttendantController {
  async handle(req: Request, res: Response) {
    const { name, cellphone, wa_id, role_id } = req.body;

    const createAttendantService = new CreateAttendantService();

    const response = await createAttendantService.execute(
      name,
      cellphone,
      wa_id,
      role_id
    );

    return res.json(response);
  }
}
