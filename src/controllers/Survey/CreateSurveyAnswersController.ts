import { Request, Response } from "express";

import { CreateSurveyAnswersService } from "../../services/Survey/CreateSurveyAnswersService";

export class CreateSurveyAnswersController {
  async handle(req: Request, res: Response) {
    const { data } = req.body;

    console.log(data);

    const service = new CreateSurveyAnswersService();

    const response = await service.execute(data);

    return res.json(response);
  }
}
