/**
 * 3.8/error4.js
 */

process.on("uncaughtException", (err) => {
  // 처리하지 못한 에러가 발생했을 때 이벤트 리스너 실행되고 프로세스 유지
  // 이 부분이 없다면 setTimeout 실행되지 않음
  // 에러 기록용으로 사용한 후 process.exit()으로 프로세스 종료하는 것이 바람직
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("서버를 고장내주마!");
}, 1000);

setTimeout(() => {
  console.log("실행됩니다");
}, 2000);
