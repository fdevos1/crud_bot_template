import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyAnswersService {
  async execute(data: any) {
    const survey_answer = await prismaClient.surveyAnswers.createMany({
      data,
    });

    return survey_answer;
  }
}
