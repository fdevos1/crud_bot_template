import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";

export class CreateAdminController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createAdminUseCase = new CreateAdminUseCase();

    const user = await createAdminUseCase.execute({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}
