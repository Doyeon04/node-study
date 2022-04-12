const fs = require("fs");

fs.watch("./target.txt", (eventType, filename) => {
  // 파일/폴더의 변경 사항 감시
  console.log(eventType, filename);
});
