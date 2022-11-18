import { Request, Response } from "express";

import { CreateSurveyService } from "../../services/Survey/CreateSurveyService";

export class CreateSurveyController {
  async handle(req: Request, res: Response) {
    const { survey_text, survey_subject, survey_send_hour } = req.body;

    const createSurveyService = new CreateSurveyService();

    const response = await createSurveyService.execute(
      survey_text,
      survey_subject,
      survey_send_hour
    );

    return res.json(response);
  }
}
