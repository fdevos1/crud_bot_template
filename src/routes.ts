import { Router } from "express";

import { CreateCustomServiceController } from "./controllers/CustomService/CreateCustomServiceController";
import { CreateGroupController } from "./controllers/Groups/CreateGroupController";
import { CreateMessageController } from "./controllers/Message/CreateMessageController";
import { CreateRoleController } from "./controllers/Role/CreateRoleController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { CreateAdminController } from "./useCases/createAdmin/CreateAdminController";

import { GetCustomServiceController } from "./controllers/CustomService/GetCustomServiceController";
import { GetLastCustomServiceController } from "./controllers/CustomService/GetLastCustomServiceController";
import { GetMessageController } from "./controllers/Message/GetMessageController";
import { GetGroupController } from "./controllers/Groups/GetGroupController";
import { GetRoleController } from "./controllers/Role/GetRoleController";
import { GetUserController } from "./controllers/User/GetUserController";

import { FinishCustomServiceController } from "./controllers/CustomService/FinishCustomServiceController";

import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserControllers";
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
const createGroupController = new CreateGroupController();

const getUserController = new GetUserController();
const getCustomServiceController = new GetCustomServiceController();
const getRoleController = new GetRoleController();
const getMessageController = new GetMessageController();
const getLastCustomServiceController = new GetLastCustomServiceController();
const getGroupController = new GetGroupController();

const finishCustomService = new FinishCustomServiceController();

router.post("/create-admin", createAdminController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenController.handle);
router.post("/create-user", createUserController.handle);
router.post("/create-custom-service", createCustomServiceController.handle);
router.post("/create-role", createRoleController.handle);
router.post("/create-message", createMessageController.handle);
router.post("/create-group", createGroupController.handle);

router.get("/users", getUserController.handle);
router.get("/custom-service", getCustomServiceController.handle);
router.get("/roles", getRoleController.handle);
router.get("/messages", getMessageController.handle);
router.get("/get-last-service", getLastCustomServiceController.handle);
router.get("/get-group", getGroupController.handle);

router.put("/finish-service", finishCustomService.handle);

export { router };
