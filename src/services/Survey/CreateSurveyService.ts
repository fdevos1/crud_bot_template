import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyService {
  async execute(survey_text: string, survey_subject: string) {
    const survey = await prismaClient.survey.create({
      data: {
        survey_text,
        survey_subject,
      },
    });

    return survey;
  }
}
