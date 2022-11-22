import { prismaClient } from "../../prisma/PrismaClient";

export class GetSurveyAnswerService {
  async execute(survey_id: number) {
    const surveyAnswer = await prismaClient.surveyAnswers.findFirst({
      where: {
        id_from_survey: survey_id,
      },
    });

    return surveyAnswer;
  }
}
