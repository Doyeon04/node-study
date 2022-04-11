import { odd, even } from "./var";

// 파일 확장자 mjs로 지정시 ES2015 모듈 시스템 사용 가능
// js 확장자 사용하려면 package.json에 type: "module" 속성 추가
function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

export default checkOddOrEven;
