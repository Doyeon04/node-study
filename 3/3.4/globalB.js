/**
 * 3.4/globalB.js
 */

const A = require("./globalA");

global.message = "hello";
console.log(A()); // hello

// globalB에서 넣은 global.message 값을 globalA 에서도 접근 가능
