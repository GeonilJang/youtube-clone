// export const vides =[
//   {
//     id:20180001,
//     title:"Video awesome1",
//     description: "this is geonil jang;s",
//     views:24,
//     videoFile:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator:{
//       id:"12122",
//       name:"goenil",
//       email:"jgi00@naver.com"
//     }
//   },
//   {
//     id:20180002,
//     title:"Video awesome2",
//     description: "this is geonil jang;s",
//     views:1000,
//     videoFile:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator:{
//       id:"12122",
//       name:"goenil",
//       email:"jgi00@naver.com"
//     }
//   },
//   {
//     id:20180003,
//     title:"Video awesome3",
//     description: "this is geonil jang;s",
//     views:224,
//     videoFile:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator:{
//       id:"12122",
//       name:"goenil",
//       email:"jgi00@naver.com"
//     }
//   }
// ]

import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/gun-tube",
{
  userNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("connected DB");
const hendleError = (error)  => console.log(`error on db connection : ${error}`);

db.once("open", handleOpen)//open connection
db.on("error", hendleError);
