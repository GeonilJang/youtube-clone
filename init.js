import app from "./app";

const PORT = 4000;
const handleListening = () => console.log(`Server start at port : ${PORT} 에서 실행 중!!`);

app.listen(PORT,handleListening);
