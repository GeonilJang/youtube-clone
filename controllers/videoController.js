import {vides} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    //console.log(vides);
    res.render("home",{pageTitle:'Home',vides});
};

export const search = (req, res) => {
  const {query:{term : searchingBy}} = req
  res.render("search", {pageTitle:'Search',searchingBy, vides});
};

export const getUpload = (req, res) =>  res.render("upload", {pageTitle:'Upload'});
export const postUpload = (req, res) =>  {
  const{
    body:{file,title,description}
  }=req;
  //To Do : upload and save video
  res.redirect(routes.videoDetail(20180001));
};


//어떤 페이지를 보여주며 페이지로 전달 되는 객체가 무엇일지를 정의한다.ㄴ
// 페이지 렌더 + 페이지로 전달 되는 객체는 여기서 정의를 하고
                                               //"pug" 페이지 입니다.
export const videos = (req, res) =>  res.render("videos", {pageTitle:'Videos'});

export const videoDetail = (req, res) =>  res.render("videoDetail", {pageTitle:'VideoDetail'});
export const editVideo = (req, res) =>  res.render("editVideo", {pageTitle:'EditVideo'});
export const deleteVideo = (req, res) =>  res.render("deleteVideo", {pageTitle:'DeleteVideo'});
