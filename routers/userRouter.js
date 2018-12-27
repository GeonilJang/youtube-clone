import express from "express";
import routes from "../routes";
import {users, userDetail, editProfile, changePassword} from "../controllers/userController"


const userRouter = express.Router();

//get or post 오는 요청을 처리하는 부분인데 path를 처리 합니다.
userRouter.get(routes.editProfile , editProfile);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword , changePassword);
userRouter.get(routes.users , users);

export default userRouter;
