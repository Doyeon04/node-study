const fs = require("fs");

console.log("시작");
let data = fs.readFileSync("./readme2.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("2번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("3번", data.toString());
console.log("끝");

// Sync: 요청이 수백개 들어올 때 성능에 문제가 생김
// 백그라운드조차 동시에 처리할 수 없게 됨
// 프로그램 처음 실행시 초기화 용도로 사용 권장
