import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyVoteService {
  async execute(survey_id: number, user_id: number) {
    const survey_vote = await prismaClient.surveyVotes.create({
      data: {
        answer_survey_id: survey_id,
        user_id_vote: user_id,
      },
    });

    return survey_vote;
  }
}
