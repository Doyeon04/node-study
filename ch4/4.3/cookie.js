/**
 * 4.3/cookie.js
 */

const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie); // req.headers.cookie에 쿠키가 저장되어 있음
    res.writeHead(200, { "Set-Cookie": "mycookie=test" }); // 다음과 같은 값의 쿠키를 저장
    // 이름: mycookie 값: test
    res.end("Hello Cookie");
  })
  .listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
  });

// / undefined : 쿠키에 대한 정보가 없다. 브라우저가 추가로 /favicon.ico를 요청
// /favicon.ico mycookie=test : 서버가 응답의 헤더에 쿠키를 심으라고 브라우저에 명령해
// 두번 째 요청의 헤더에 쿠키가 들어있다.
