import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyVoteService {
  async execute(survey_id: number, user_id_vote: string, answer_text: string) {
    const survey_vote = await prismaClient.surveyVotes.findFirst({
      where: {
        survey_id: Number(survey_id),
        user_id_vote,
      },
    });

    if (!survey_vote) {
      const create_survey_vote = await prismaClient.surveyVotes.create({
        data: {
          user_id_vote,
          answer_text,
          survey_id: Number(survey_id),
        },
      });

      return create_survey_vote;
    }

    return;
  }
}
