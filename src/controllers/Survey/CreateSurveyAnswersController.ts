import { Request, Response } from "express";

import { CreateSurveyAnswersService } from "../../services/Survey/CreateSurveyAnswersService";

export class CreateSurveyAnswersController {
  async handle(req: Request, res: Response) {
    const answerList = req.body;

    const service = new CreateSurveyAnswersService();

    const response = await service.execute(answerList);

    return res.json(response);
  }
}
