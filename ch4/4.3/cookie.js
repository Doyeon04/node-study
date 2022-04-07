/**
 * 4.3/cookie.js
 */

const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie); // req.headers.cookie에 쿠키가 저장되어 있음
    res.writeHead(200, { "Set-Cookie": "mycookie=test" }); // 다음과 같은 값의 쿠키를 저장
    res.end("Hello Cookie");
  })
  .listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
  });
