/**
 * 3.4/this.js
 */

console.log("@global");
console.log("this:", this); // {}
console.log(`this === module.exports: ${this === module.exports}`); // true
console.log(`this === exports: ${this === exports}`); // true
console.log(`this === global: ${this === global}`); // false
console.log(`module.exports === exports: ${module.exports === exports}\n`); // true

function func1() {
  console.log("@func1");
  console.log("this:", this); // global
  console.log(`this === module.exports: ${this === module.exports}`); // false
  console.log(`this === exports: ${this === exports}`); // false
  console.log(`this === global: ${this === global}`); // true
  console.log(`module.exports === exports: ${module.exports === exports}\n`); // true
}
func1();

const func2 = () => {
  console.log("@func2, arrow function");
  console.log("this:", this); // {}
  console.log(`this === module.exports: ${this === module.exports}`); // true
  console.log(`this === exports: ${this === exports}`); // true
  console.log(`this === global: ${this === global}`); // false
  console.log(`module.exports === exports: ${module.exports === exports}`); // true
};
func2();
