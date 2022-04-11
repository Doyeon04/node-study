/* 3.4/exit.js */

let i = 1;
// setInterval(() => {
//   if (i === 5) {
//     console.log('terminate!');
//     process.exit();
//   }
//   console.log(i);
//   i += 1;
// }, 10000);

const func = () => {
  if (i === 5) {
    console.log("terminate!");
    process.exit(); // 인수로 코드 번호를 줄 수 있음
    // 생략하거나 0이면 정상 종료, 1을 주면 비정상 종료
  }
  console.log(i);
  i += 1;
};

setInterval(func, 3000);
