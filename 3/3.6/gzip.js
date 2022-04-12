const zlib = require("zlib");
const fs = require("fs");

// 파일 압축 후 복사
const readStream = fs.createReadStream("./readme4.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./readme4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
