import express from "express";
import routes from "../routes";
import {videos, getUpload, postUpload, videoDetail, editVideo, deleteVideo} from "../controllers/videoController";

const videoRouter = express.Router();

//get or post 오는 요청을 처리하는 부분인데 path를 처리 합니다.
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
