const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt"); // 쓰기 스트림 생성
writeStream.on("finish", () => {
  // 파일 쓰기 종료시 콜백 함수 호출
  console.log("파일 쓰기 완료");
});

writeStream.write("이 글을 씁니다.\n");
writeStream.write("한 번 더 씁니다.");
writeStream.end();
