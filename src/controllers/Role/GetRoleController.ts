import { Request, Response } from "express";

import { GetRoleService } from "../../services/Role/GetRoleService";

export class GetRoleController {
  async handle(req: Request, res: Response) {
    const getRoleService = new GetRoleService();

    const response = await getRoleService.execute();

    return res.json(response);
  }
}
