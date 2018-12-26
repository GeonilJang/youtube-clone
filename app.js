import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import pug from "pug";
import {localsMiddleware} from "./middlewares";

const app = express();

//middleware
/*
  라우트를 거치기 전에 먼저 실행되어 기능을 도와 주는 역할을 한다.
*/

//pug view 엔진을 통해서 조금더 깔끔하게 HTML 문서 작업을 실시 할 수 있다.
app.set('view engine',"pug");
 //cookie 정보를 받아서 사용하기 위해서 사용한다.
app.use(cookieParser());
//form 을 통해서 전달 하는 객체를 내부에서 사용하기 위해서 사용한다.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//접속 로그 그록을 콘솔에 남겨누는 역할을 하는 미들 웨어
app.use(morgan("dev"));
//보안관련 역할을 해준다.
app.use(helmet());
app.use(localsMiddleware);


//route
app.use(routes.home, globalRouter);
app.use(routes.users , userRouter);
app.use(routes.videos, videoRouter);

export default app;
