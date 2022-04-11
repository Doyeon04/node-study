/**
 * wf2-2-14.js
 */

// 배열의 구조 분해 할당

// 각 배열 인덱스와 변수가 대응
const array = ["nodejs", {}, 10, true];
const [node, obj, , bool] = array;

console.log(array);
console.log(node);
console.log(obj);
console.log(bool);
