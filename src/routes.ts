import { Router } from "express";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserControllers";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { RefreshTokenController } from "./useCases/refreshToken/RefreshTokenController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

router.post("/create-admin", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenController.handle);

export { router };
