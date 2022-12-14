import { Request, Response } from "express";

import { CreateMessageServiceService } from "../../services/MessageService/CreateMessageSvcService";

export class CreateMessageServiceController {
  async handle(req: Request, res: Response) {
    const { text } = req.body;

    const service = new CreateMessageServiceService();

    const response = await service.execute(text);

    return res.json(response);
  }
}
