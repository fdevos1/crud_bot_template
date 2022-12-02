import { Router } from "express";

import { CreateCustomServiceController } from "./controllers/CustomService/CreateCustomServiceController";
import { CreateGroupController } from "./controllers/Groups/CreateGroupController";
import { CreateMessageController } from "./controllers/Message/CreateMessageController";
import { CreateRoleController } from "./controllers/Role/CreateRoleController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { CreateAdminController } from "./useCases/createAdmin/CreateAdminController";
import { CreateSurveyController } from "./controllers/Survey/CreateSurveyController";

import { GetCustomServiceController } from "./controllers/CustomService/GetCustomServiceController";
import { GetLastCustomServiceController } from "./controllers/CustomService/GetLastCustomServiceController";
import { GetMessageController } from "./controllers/Message/GetMessageController";
import { GetGroupController } from "./controllers/Groups/GetGroupController";
import { GetRoleController } from "./controllers/Role/GetRoleController";
import { GetUserController } from "./controllers/User/GetUserController";
import { GetSurveyController } from "./controllers/Survey/GetSurveyController";
import { GetLastSurveyController } from "./controllers/Survey/GetLastSurveyController";
import { GetSurveyAnswerController } from "./controllers/Survey/GetSurveyAnswerController";

import { FinishCustomServiceController } from "./controllers/CustomService/FinishCustomServiceController";

import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserControllers";
import { RefreshTokenController } from "./useCases/refreshToken/RefreshTokenController";
import { GetWaInfosController } from "./controllers/Groups/GetWaInfosController";
import { UserOnAttendanceController } from "./controllers/User/UserOnAttendance";
import { UserOutAttendanceController } from "./controllers/User/UserOutAttendance";
import { CreateSurveyAnswersController } from "./controllers/Survey/CreateSurveyAnswersController";
import { UserOnTransmissionListController } from "./controllers/User/UserOnTransmissionListController";
import { UserOutTransmissionListController } from "./controllers/User/UserOutTranmissionListController";

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
const createSurveyController = new CreateSurveyController();
const createSurveyAnswerController = new CreateSurveyAnswersController();

const getUserController = new GetUserController();
const getCustomServiceController = new GetCustomServiceController();
const getRoleController = new GetRoleController();
const getMessageController = new GetMessageController();
const getLastCustomServiceController = new GetLastCustomServiceController();
const getGroupController = new GetGroupController();
const getSurveyController = new GetSurveyController();
const getLastSurveyController = new GetLastSurveyController();
const getSurveyAnswerController = new GetSurveyAnswerController();

const finishCustomController = new FinishCustomServiceController();
const getWaInfosController = new GetWaInfosController();
const userOnAttendanceController = new UserOnAttendanceController();
const userOutAttendanceController = new UserOutAttendanceController();
const userOnTransmissionListController = new UserOnTransmissionListController();
const userOutTransmissionListController =
  new UserOutTransmissionListController();

router.post("/create-admin", createAdminController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenController.handle);
router.post("/create-user", createUserController.handle);
router.post("/create-custom-service", createCustomServiceController.handle);
router.post("/create-role", createRoleController.handle);
router.post("/create-message", createMessageController.handle);
router.post("/create-group", createGroupController.handle);
router.post("/create-survey", createSurveyController.handle);
router.post("/create-survey-answer", createSurveyAnswerController.handle);

router.get("/users", getUserController.handle);
router.get("/custom-service", getCustomServiceController.handle);
router.get("/roles", getRoleController.handle);
router.get("/messages", getMessageController.handle);
router.get(
  "/get-last-service&user=:user_cellphone",
  getLastCustomServiceController.handle
);
router.get("/get-group", getGroupController.handle);
router.get("/get-survey", getSurveyController.handle);
router.get("/last-survey", getLastSurveyController.handle);
router.get(
  "/get-survey-answer&survey=:survey_id",
  getSurveyAnswerController.handle
);

router.put("/finish-service", finishCustomController.handle);
router.put("/group-created", getWaInfosController.handle);
router.put("/user-on-attendance", userOnAttendanceController.handle);
router.put("/user-out-attendance", userOutAttendanceController.handle);
router.put(
  "/user-on-transmission-list&cellphone=:cellphone",
  userOnTransmissionListController.handle
);
router.put(
  "/user-out-transmission-list&cellphone=:cellphone",
  userOutTransmissionListController.handle
);

export { router };
