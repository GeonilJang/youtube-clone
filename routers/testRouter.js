import express from "express";
import routes from "../routes";
import { test } from "../controllers/testController";

const testRouter = express.Router();
testRouter.get(routes.home, test);

export default testRouter;
