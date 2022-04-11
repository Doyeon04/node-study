/**
 * wf2-2-8.js
 */

// 함수 호출
console.log(`add1(10, 20): ${add1(10, 20)}`); // 30

// 함수 선언
function add1(x, y) {
  return x + y;
}

// 함수 호이스팅: 함수 선언을 유효 scope의 최상단으로 올려 함수 선언 전에도 호출 가능
