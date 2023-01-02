import { Request, Response } from "express";
import { CreateSurveyVoteService } from "../../services/Survey/CreateSurveyVoteService";

export class CreateSurveyVoteController {
  async handle(req: Request, res: Response) {
    const { survey_id, user_id_vote, answer_text } = req.body;

    const service = new CreateSurveyVoteService();

    const result = await service.execute(survey_id, user_id_vote, answer_text);

    return res.json(result);
  }
}
