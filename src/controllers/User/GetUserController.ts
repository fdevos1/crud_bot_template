import { Request, Response } from "express";
import { GetUserService } from "../../services/User/GetUserService";

export class GetUserController {
  async handle(req: Request, res: Response) {
    const getUserService = new GetUserService();

    const response = await getUserService.execute();

    return res.json(response);
  }
}
