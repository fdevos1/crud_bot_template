import { Request, Response } from "express";
import { CreateRoleService } from "../../services/Role/CreateRoleService";

export class CreateRoleController {
  async handle(req: Request, res: Response) {
    const { role_name } = req.body;

    const createRoleService = new CreateRoleService();

    const response = await createRoleService.execute(role_name);

    return res.json(response);
  }
}
