/**
 * wf2-2-9.js
 */

// 함수 표현식: 변수나 상수로 할당 가능
// const, let으로 할당하여 호이스팅 방지

console.log(add2(10, 20)); // Uncaught ReferenceError
console.log(add3(10, 20)); // Uncaught ReferenceError

// 함수 표현식 1: 익명함수 활용
const add2 = function (x, y) {
  return x + y;
};

// 함수 표현식 2: 기명함수 – 함수 식별자 존재
const add3 = function add4(x, y) {
  return x + y;
};

console.log(add2(10, 20)); // 30
console.log(add3(10, 20)); // 30
console.log(add4(10, 20)); // Uncaught ReferenceError
