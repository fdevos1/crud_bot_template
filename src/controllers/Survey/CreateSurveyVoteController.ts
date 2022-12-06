import { Request, Response } from "express";
import { CreateSurveyVoteService } from "../../services/Survey/CreateSurveyVoteService";

export class CreateSurveyVoteController {
  async handle(req: Request, res: Response) {
    const { survey_answer_id, user_id } = req.body;

    console.log(survey_answer_id, user_id);

    const service = new CreateSurveyVoteService();

    const result = await service.execute(survey_answer_id, user_id);

    console.log(result);

    return res.json(result);
  }
}
