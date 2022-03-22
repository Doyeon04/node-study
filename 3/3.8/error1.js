/**
 * 3.8/error1.js
 */

setInterval(() => {
  // 프로세스가 에러로 인해 멈추면 setInterval도 멈춤
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마!");
  } catch (err) {
    console.error(err);
  }
}, 1000);
