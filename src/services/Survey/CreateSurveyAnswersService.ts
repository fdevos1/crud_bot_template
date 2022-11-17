import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyAnswersService {
  async execute(data: any) {
    console.log(data);

    const survey_answer = await prismaClient.surveyAnswers.createMany({
      data,
    });

    return survey_answer;
  }
}
