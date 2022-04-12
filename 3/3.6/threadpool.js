// 스레드풀 -> fs 메서드를 여러번 실행해도 백그라운드에서 동시에 처리할 수 있음
// 스레드풀을 사용하는 모듈: crpto, zlib, dns.lookup
// 기본적인 스레드풀의 개수는 4개 이므로
// 처음 네작업 동시 실행하고 종료되면 다음 네개의 작업 실행

const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("5:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("6:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("7:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("8:", Date.now() - start);
});
