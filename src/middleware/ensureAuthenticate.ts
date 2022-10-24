import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: "Sem token de autorização",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, "97e8ec6e-f6cd-43c8-a338-77fddc67a086");

    return next();
  } catch (err) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }
}
