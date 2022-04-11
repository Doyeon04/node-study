/** 
 * wf2-2-10.js
 */

function func_a(x, y) {
  return x + y;
};
console.log(`func_a: ${func_a(1, 2)}`);  // 3

const func_b = function(x, y) {
  return x + y;
};
console.log(`func_b: ${func_b(1, 2)}`); // 3