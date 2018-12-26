import app from "./app";

const PORT = 4000;//포트 설정을 여기서 한다.
const handleListening = () => console.log(`Server start at port : ${PORT} 에서 실행 중!!`);

app.listen(PORT,handleListening);

//포트설정을 여기서 하고 앱 시작을 여기 서 시작시킨다.
