import { sign } from "jsonwebtoken";

export class GenerateTokenProvider {
  async execute(user_id: number) {
    const token = sign({}, "97e8ec6e-f6cd-43c8-a338-77fddc67a086", {
      subject: user_id.toString(),
      expiresIn: "1d",
    });

    return token;
  }
}
