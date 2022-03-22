/**
 * 3.8/error2.js
 */

const fs = require("fs");

setInterval(() => {
  fs.unlink("./abcdefg.js", (err) => {
    // 존재하지 않는 파일을 지우고 있음
    if (err) {
      console.error(err);
    }
  });
}, 1000);
