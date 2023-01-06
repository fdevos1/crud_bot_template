import { Request, Response } from "express";
import { CreateManifestationService } from "../../services/Ouvidoria/CreateManifestationService";

export class CreateManifestationController {
  async handle(req: Request, res: Response) {
    const { first_name, last_name, cellphone, user_email, cpf, type, text } =
      req.body;

    const createManifestationService = new CreateManifestationService();

    const response = await createManifestationService.execute(
      first_name,
      last_name,
      cellphone,
      user_email,
      cpf,
      type,
      text
    );
    return res.json(response);
  }
}
