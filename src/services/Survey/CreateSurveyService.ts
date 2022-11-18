import { prismaClient } from "../../prisma/PrismaClient";

export class CreateSurveyService {
  async execute(
    survey_text: string,
    survey_subject: string,
    survey_send_hour: Date
  ) {
    const survey = await prismaClient.survey.create({
      data: {
        survey_text,
        survey_subject,
        survey_send_hour,
      },
    });

    return survey;
  }
}
