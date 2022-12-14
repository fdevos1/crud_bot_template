import { prismaClient } from "../../prisma/PrismaClient";

export class GetSurveyAnswerService {
  async execute(survey_id: string) {
    const surveyAnswer = await prismaClient.surveyAnswers.findMany({
      where: {
        id_from_survey: Number(survey_id),
      },
      include: {
        survey_votes: true,
      },
    });

    return surveyAnswer;
  }
}
