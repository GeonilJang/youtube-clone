import routes from "./routes";
import multer from "multer";


//static 으로 만들기위해서 사용하는 부분으로 확인됩니다.
const multerVideo = multer({dest:"uploads/videos/"})


export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'GumTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated:false,
    id:1
  }
  next();
};


export const uploadVideo = multerVideo.single('videoFile');
