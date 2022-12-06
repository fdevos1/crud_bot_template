import { Request, Response } from "express";
import { CreateSurveyVoteService } from "../../services/Survey/CreateSurveyVoteService";

export class CreateSurveyVoteController {
  async handle(req: Request, res: Response) {
    const { answer_survey_id, user_id } = req.body;

    console.log(answer_survey_id, user_id);

    const service = new CreateSurveyVoteService();

    const result = await service.execute(answer_survey_id, user_id);

    return res.json(result);
  }
}
