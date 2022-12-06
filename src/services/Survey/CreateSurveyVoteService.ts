import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyVoteService {
  async execute(survey_id: string, user_id: string) {
    const survey_vote = await prismaClient.surveyVotes.findMany({
      where: {
        answer_survey_id: parseInt(survey_id),
      },
    });

    if (!survey_vote) {
      const create_survey_vote = await prismaClient.surveyVotes.create({
        data: {
          answer_survey_id: parseInt(survey_id),
          user_id_vote: parseInt(user_id),
        },
      });

      return create_survey_vote;
    }
  }
}
