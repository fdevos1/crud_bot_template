import { Request, Response } from "express";
import { GetSurveyAnswerService } from "../../services/Survey/GetSurveyAnswersService";

export class GetSurveyAnswerController {
  async handle(req: Request, res: Response) {
    const { survey_id } = req.body;

    const service = new GetSurveyAnswerService();
    const response = await service.execute(survey_id);

    return res.json(response);
  }
}
