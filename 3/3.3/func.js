/**
 * 3.3/func.js
 */

const { odd, even } = require("./var");

function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
// module.exports 에 함수나 변수 대입 가능
