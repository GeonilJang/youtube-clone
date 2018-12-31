//라우더 경로를 한 번에 관리하고자 만든 페이지 입니다.

const TEST ="/test";

//globalRouter
const HOME ="/";
const JOIN ="/join";
const LOGIN ="/login";
const LOGOUT ="/logout";
const SEARCH ="/search";


//Users
const USERS = "/users"
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANG_PASSWORD = "/change-password";

//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete"


const routes = {
  test : TEST,
  home : HOME,
  join : JOIN,
  login : LOGIN,
  logout : LOGOUT,
  search : SEARCH,
  users : USERS,
  userDetail : (id)=>{
    if(id){
      return `/users/${id}`;
    }else{
      return USER_DETAIL;
    }
  },
  editProfile : EDIT_PROFILE,
  changePassword : CHANG_PASSWORD,
  videos : VIDEOS,
  upload : UPLOAD,
  videoDetail : (id)=>{
    if(id){
      return `/videos/${id}`;
    }else{
      return VIDEO_DETAIL;
    }
  },
  editVideo : (id)=>{
    if(id){
      return `/videos/${id}/edit`;
    }else{
      return EDIT_VIDEO;
    }
  },
  deleteVideo : DELETE_VIDEO
}

export default routes;
