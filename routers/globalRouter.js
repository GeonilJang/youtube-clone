import express from "express";
import routes from "../routes";
import {home, search} from "../controllers/videoController"
import {getJoin,postJoin, logout, getLogin, postLogin} from "../controllers/userController"

const globalRouter = express.Router();

//get or post 오는 요청을 처리하는 부분인데 path를 처리 합니다.

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);




globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
