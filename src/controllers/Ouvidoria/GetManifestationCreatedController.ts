import { Request, Response } from "express";
import { GetManifestationCreatedService } from "../../services/Ouvidoria/GetManifestationCreatedService";

export class GetManifestationCreatedController {
  async handle(req: Request, res: Response) {
    const { cpf } = req.body;

    const getManifestationCreatedService = new GetManifestationCreatedService();

    const response = await getManifestationCreatedService.execute(cpf);

    return res.json(response);
  }
}
