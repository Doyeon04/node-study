/**
 * 3.3/index.js
 */

// 모듈하나가 여러개의 모듈 사용 가능
const { odd, even } = require("./var");
const checkNumber = require("./func"); // 모듈로부터 값을 불러올 때 변수 이름 다르게 지정 가능

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10)); // even
console.log(checkStringOddOrEven("hello")); // odd
