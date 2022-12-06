import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyVoteService {
  async execute(answer_survey_id: number, user_id: string) {
    const survey_vote = await prismaClient.surveyVotes.findFirst({
      where: {
        answer_survey_id,
        user_id_vote: user_id,
      },
    });

    if (!survey_vote) {
      const create_survey_vote = await prismaClient.surveyVotes.create({
        data: {
          answer_survey_id,
          user_id_vote: user_id,
        },
      });

      return create_survey_vote;
    }

    return;
  }
}
