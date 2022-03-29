/**
 * 3.3/index.js
 */

const { odd, even } = require("./var");
const checkNumber = require("./func"); // 모듈로부터 값을 불러올 때 변수 이름 다르게 지정 가능

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
