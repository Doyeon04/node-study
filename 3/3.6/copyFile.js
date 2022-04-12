const fs = require("fs");

fs.copyFile("readme4.txt", "writeme4.txt", (error) => {
  // 복사할 파일, 복사될 경로, 복사 후 실행될 콜백 함수
  if (error) {
    return console.error(error);
  }
  console.log("복사 완료");
});
