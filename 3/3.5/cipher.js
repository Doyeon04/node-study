// 양방향 대칭형 암호화
// 암호화된 문자열을 복호화 할 수 있으며, 키가 사용됨

const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456";

const cipher = crypto.createCipheriv(algorithm, key, iv);
// 암호화 알고리즒, 키, iv(초기화 벡터)
let result = cipher.update("암호화할 문장", "utf8", "base64");
// 암호화할 대상, 대상의 인코딩, 출력 결과물의 인쾨딩
result += cipher.final("base64");
// 출력 결과물의 인코딩 넣으면 암호화 완료
console.log("암호화:", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");
console.log("복호화:", result2);
