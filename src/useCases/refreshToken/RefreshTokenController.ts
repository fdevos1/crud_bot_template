import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

export class RefreshTokenController {
  async handle(req: Request, res: Response) {
    const { refresh_token } = req.body;

    const refreshTokenUseCase = new RefreshTokenUseCase();

    const token = await refreshTokenUseCase.execute(refresh_token);

    return res.json(token);
  }
}
