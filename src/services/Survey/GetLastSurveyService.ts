import { prismaClient } from "../../prisma/PrismaClient";

export class GetLastSurveyService {
  async execute() {
    const survey = await prismaClient.survey.findFirst({
      orderBy: [
        {
          survey_id: "desc",
        },
      ],
    });

    return survey;
  }
}
