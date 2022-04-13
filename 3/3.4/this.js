/**
 * 3.4/this.js
 */

/* 전역 스코프 */
console.log("@global");
console.log("this:", this); // {}
console.log(`this === module.exports: ${this === module.exports}`); // true
console.log(`this === exports: ${this === exports}`); // true
console.log(`this === global: ${this === global}`); // false
console.log(`module.exports === exports: ${module.exports === exports}\n`); // true

// this, module.exports, exports는 같은 global 스코프의 빈 객체 {} 참조. global객체와는 다름

/* 함수 선언식 스코프 */
function func1() {
  console.log("@func1");
  console.log("this:", this); // global
  console.log(`this === module.exports: ${this === module.exports}`); // false
  console.log(`this === exports: ${this === exports}`); // false
  console.log(`this === global: ${this === global}`); // true
  console.log(`module.exports === exports: ${module.exports === exports}\n`); // true

  // 함수 안의 this는 global 객체 참조
}
func1();

/* 화살표 함수 스코프 */
const func2 = () => {
  console.log("@func2, arrow function");
  console.log("this:", this); // {}
  console.log(`this === module.exports: ${this === module.exports}`); // true
  console.log(`this === exports: ${this === exports}`); // true
  console.log(`this === global: ${this === global}`); // false
  console.log(`module.exports === exports: ${module.exports === exports}`); // true
};
func2();

// this, module.exports, exports는 같은 global 스코프의 빈 객체 {} 참조. global 객체와는 다름

// => 전역 스코프, 화살표 함수에서의 this가 같음
