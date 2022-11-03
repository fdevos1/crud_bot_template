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
    verify(token, "046c3ca0-5b77-11ed-9b6a-0242ac120002");

    return next();
  } catch (err) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }
}
