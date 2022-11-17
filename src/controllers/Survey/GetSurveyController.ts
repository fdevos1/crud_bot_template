import { Request, Response } from "express";

import { GetSurveyService } from "../../services/Survey/GetSurveyService";

export class GetSurveyController {
  async handle(req: Request, res: Response) {
    const service = new GetSurveyService();

    const response = await service.execute();

    console.log(response);

    return res.json(response);
  }
}
