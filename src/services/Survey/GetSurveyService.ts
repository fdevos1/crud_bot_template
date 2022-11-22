import { prismaClient } from "../../prisma/PrismaClient";

export class GetSurveyService {
  async execute() {
    const survey = await prismaClient.survey.findMany();

    return survey;
  }
}
