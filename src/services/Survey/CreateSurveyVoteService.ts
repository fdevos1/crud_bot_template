import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyVoteService {
  async execute(survey_id: number, user_id: string) {
    const survey_vote = await prismaClient.surveyVotes.findFirst({
      where: {
        answer_survey_id: survey_id,
      },
    });

    console.log(survey_vote);

    if (!survey_vote) {
      const create_survey_vote = await prismaClient.surveyVotes.create({
        data: {
          answer_survey_id: survey_id,
          user_id_vote: user_id,
        },
      });

      return create_survey_vote;
    }

    return;
  }
}
