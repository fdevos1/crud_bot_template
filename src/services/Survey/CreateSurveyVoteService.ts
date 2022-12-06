import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyVoteService {
  async execute(answer_survey_id: number, user_id_vote: string) {
    const survey_vote = await prismaClient.surveyVotes.findFirst({
      where: {
        answer_survey_id,
        user_id_vote,
      },
    });

    if (!survey_vote) {
      const create_survey_vote = await prismaClient.surveyVotes.create({
        data: {
          answer_survey_id,
          user_id_vote,
        },
      });

      return create_survey_vote;
    }

    return;
  }
}
