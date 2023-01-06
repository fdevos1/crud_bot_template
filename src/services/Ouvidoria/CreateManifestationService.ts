import { prismaClient } from "../../prisma/PrismaClient";

export class CreateManifestationService {
  async execute(
    first_name: string,
    last_name: string,
    cellphone: string,
    user_email: string,
    cpf: string,
    type: number,
    text: string
  ) {
    const manifestation = await prismaClient.ouvidoria.create({
      data: {
        first_name,
        last_name,
        cellphone,
        user_email,
        cpf,
        type,
        text,
      },
    });

    return manifestation;
  }
}
