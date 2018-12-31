import routes from "../routes";
import Video from "../models/Video";

//async 를입력하게 되면 특정 부분에서 대기 시킬 수 있다 원래대로라면 기다리지 않고 아래로 그냥 쭉!! 실행된다.
export const home =async(req, res) => {
    try{
      const vides = await Video.find({}); //여기가 다 시작할 때까지 다음을 시작 하지 말란 뜻으로 asunc 와 awaut을 사옹한다.
      console.log(vides);
      //throw Error("dddd");
      res.render("home",{pageTitle:'Home', vides});
    }catch(error){
      console.log(error);
      res.render("home",{pageTitle:'Home', vides:[]});
    }
};

export const search = (req, res) => {
  const {query:{term : searchingBy}} = req
  res.render("search", {pageTitle:'Search',searchingBy, vides});
};

export const getUpload = (req, res) =>  res.render("upload", {pageTitle:'Upload'});
export const postUpload = async(req, res) =>  {
  const {
    body:{title, description},
    file:{path}
  } = req;

  const newVideo = await Video.create({
    fileUrl:path,
    title:title,
    description:description
  })

  console.log(newVideo);
  //To Do : upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
  //res.render("upload", {pageTitle:'Upload'});
};


//어떤 페이지를 보여주며 페이지로 전달 되는 객체가 무엇일지를 정의한다.ㄴ
// 페이지 렌더 + 페이지로 전달 되는 객체는 여기서 정의를 하고
                                               //"pug" 페이지 입니다.
export const videos = (req, res) =>  res.render("videos", {pageTitle:'Videos'});

export const videoDetail = async(req, res) => {
  const{
    params:{id}
  }=req;

  try{
    const video = await Video.findById(id);
    res.render("videoDetail", {pageTitle:'VideoDetail', video:video});
  }catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
}

export const getEditVideo = async(req, res) =>  {
  const {
    params:{id}
  }=req;
  try{
    const video = await Video.findById(id);
    res.render("editVideo", {pageTitle : `Edit ${video.title}`, video});
  }catch(error){
    res.redirect(routes.home);
  }
  res.render("editVideo", {pageTitle:'EditVideo'});
}

export const postEditVideo = async(req, res) =>{
  const {
    params: {id},
    body:{title, description}
  } = req;
  try{
    console.log(id);
    await Video.findOneAndUpdate({ _id : id }, {title, description});
    res.redirect(routes.videoDetail(id));
  }catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
}















export const deleteVideo = (req, res) =>  res.render("deleteVideo", {pageTitle:'DeleteVideo'});
