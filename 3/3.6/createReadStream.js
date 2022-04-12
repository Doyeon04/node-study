const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 }); // 읽기 스트림을 만듬
const data = [];

readStream.on("data", (chunk) => {
  // chunk 전달
  data.push(chunk);
  console.log("data :", chunk, chunk.length);
});

readStream.on("end", () => {
  // 전달 완료
  console.log("end :", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  // 에러 발생
  console.log("error :", err);
});
