import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, cellphone, wa_id } = req.body;

    const createUserService = new CreateUserService();

    const response = await createUserService.execute(name, cellphone, wa_id);

    return res.json(response);
  }
}
