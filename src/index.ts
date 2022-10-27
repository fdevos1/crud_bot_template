import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3005;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({
    status: "Error",
    message: error.message,
  });
});

app.listen(port, () => console.log("Servidor rodando na porta 3005"));
