import { Router } from "express";
import { CreateCustomServiceController } from "./controllers/CustomService/CreateCustomServiceController";
import { FinishCustomServiceController } from "./controllers/CustomService/FinishCustomServiceController";
import { GetCustomServiceController } from "./controllers/CustomService/GetCustomServiceController";
import { CreateMessageController } from "./controllers/Message/CreateMessageController";
import { GetMessageController } from "./controllers/Message/GetMessageController";
import { CreateRoleController } from "./controllers/Role/CreateRoleController";
import { GetRoleController } from "./controllers/Role/GetRoleController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { GetUserController } from "./controllers/User/GetUserController";
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

const getUserController = new GetUserController();
const getCustomServiceController = new GetCustomServiceController();
const getRoleController = new GetRoleController();
const getMessageController = new GetMessageController();

const finishCustomService = new FinishCustomServiceController();

router.post("/create-admin", createAdminController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenController.handle);
router.post("/create-user", createUserController.handle);
router.post("/create-custom-service", createCustomServiceController.handle);
router.post("/create-role", createRoleController.handle);
router.post("/create-message", createMessageController.handle);

router.get("/users", getUserController.handle);
router.get("/custom-service", getCustomServiceController.handle);
router.get("/roles", getRoleController.handle);
router.get("/messages", getMessageController.handle);

router.put("/finish-service", finishCustomService.handle);

export { router };
