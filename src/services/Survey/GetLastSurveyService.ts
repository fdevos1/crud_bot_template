import { prismaClient } from "../../prisma/PrismaClient";

export class GetLastSurveyService {
  async execute() {
    const survey = await prismaClient.survey.findMany({
      orderBy: [
        {
          survey_id: "desc",
        },
      ],
    });

    return survey;
  }
}
