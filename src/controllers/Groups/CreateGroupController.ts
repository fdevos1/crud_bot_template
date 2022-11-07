import { Request, Response } from "express";
import { CreateGroupService } from "../../services/Groups/CreateGroupService";

export class CreateGroupController {
  async handle(req: Request, res: Response) {
    const { group_name, subject, type } = req.body;

    const createGroupService = new CreateGroupService();

    const response = await createGroupService.execute(
      group_name,
      subject,
      type
    );

    return res.json(response);
  }
}
