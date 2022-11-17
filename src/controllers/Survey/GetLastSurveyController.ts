import { Request, Response } from "express";

import { GetLastSurveyService } from "../../services/Survey/GetLastSurveyService";

export class GetLastSurveyController {
  async handle(req: Request, res: Response) {
    const service = new GetLastSurveyService();

    const response = await service.execute();

    return res.json(response);
  }
}
