/**
 * 4.1/server1.js
 */

const http = require("http");

http
  .createServer((req, res) => {
    /* header */
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 응답에 대한 정보 기록
    // 성공적 요청, 응답에 대한 정보 보낼 때 컨텐츠 형식은 html, 한글 표시

    /* body */
    res.write("<h1>Hello Node!</h1>"); // 클라이언트로 보낼 데이터

    res.end("<p>Hello Server!</p>"); // 응답 종료
  })
  .listen(8080, () => {
    // 서버 연결
    // 클라이언트에게 공개할 포트 번호, 포트 연결 완료 후 실행될 콜백 함수
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });

// 8080 포트에서 요청 오기를 기다림
