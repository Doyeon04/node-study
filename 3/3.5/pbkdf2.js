// 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해 적용
// 간단하지만 bcrypt나 scrypt보다 취약함
const crypto = require("crypto");

crypto.randomBytes(64, (err, buf) => {
  // 64바이트 길이의 문자열을 만듬(salt)
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    // 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘을 인수로 넣음
    console.log("password:", key.toString("base64"));
  });
});
