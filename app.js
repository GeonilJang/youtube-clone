import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter"
import routes from "./routes";
import pug from "pug";

const app = express();

//middleware
app.set('view engine',"pug");
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));

//route
app.use(routes.home, globalRouter);
app.use(routes.users , userRouter);
app.use(routes.videos, videoRouter);

export default app;