const fs = require("fs");

const readStream = fs.createReadStream("readme4.txt");
const writeStream = fs.createWriteStream("writeme3.txt");
readStream.pipe(writeStream);

// 파일을 읽고 그 스트림을 전달 받아 파일을 씀
