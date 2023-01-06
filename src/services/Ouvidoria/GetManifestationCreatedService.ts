import { prismaClient } from "../../prisma/PrismaClient";

export class GetManifestationCreatedService {
  async execute(cpf: string) {
    const manifestation = await prismaClient.ouvidoria.findFirst({
      where: {
        cpf,
      },
    });

    return manifestation;
  }
}
