import { Request, Response } from "express";

import { GetMessageSvcService } from "../../services/MessageService/GetMessageSvcService";

export class GetMessageServiceController {
  async handle(req: Request, res: Response) {
    const service = new GetMessageSvcService();

    const response = await service.execute();

    return res.json(response);
  }
}
