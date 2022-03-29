import { odd, even } from "./var";

// 파일 확장자 mjs로 지정시 ES2015 모듈 시스템 사용 가능
function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

export default checkOddOrEven;
