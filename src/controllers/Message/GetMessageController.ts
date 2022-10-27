import { Request, Response } from "express";
import { GetMessageService } from "../../services/Message/GetMessageService";

export class GetMessageController {
  async handle(req: Request, res: Response) {
    const getMessageService = new GetMessageService();

    const response = await getMessageService.execute();

    return res.json(response);
  }
}
