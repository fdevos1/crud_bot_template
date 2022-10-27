import { Router } from "express";
import { CreateCustomServiceController } from "./controllers/CustomService/CreateCustomServiceController";
import { CreateMessageController } from "./controllers/Message/CreateMessageController";
import { CreateRoleController } from "./controllers/Role/CreateRoleController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserControllers";
import { CreateAdminController } from "./useCases/createAdmin/CreateAdminController";
import { RefreshTokenController } from "./useCases/refreshToken/RefreshTokenController";

const router = Router();

// Autenticação da aplicação

const createAdminController = new CreateAdminController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

// Controllers de criação de entidades

const createUserController = new CreateUserController();
const createCustomServiceController = new CreateCustomServiceController();
const createRoleController = new CreateRoleController();
const createMessageController = new CreateMessageController();

router.post("/create-admin", createAdminController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenController.handle);
router.post("/create-user", createUserController.handle);
router.post("/create-custom-service", createCustomServiceController.handle);
router.post("/create-role", createRoleController.handle);
router.post("/create-message", createMessageController.handle);

export { router };
