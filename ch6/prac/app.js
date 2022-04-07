/**
 * ch6/lec2/app.js
 */

const express = require("express");
// express 내부에 http 모듈이 내장되어 서버의 역할을 할 수 있음
const app = express();

app.set("port", process.env.PORT || 3000); // 서버가 실행될 포트 설정
app.get("/", (req, res) => {
  // 주소에 대한 GET 요청이 올 때
  res.send("Hello, Express"); // 응답 전송
});
app.listen(app.get("port"), () => {
  // 포트를 가져와 연결하고 서버를 실행
  console.log(app.get("port"), "port listening");
});

// npm start -> 실행 스크립트 실행 -> nodemon 패키지 띄우고 app.js 호출
