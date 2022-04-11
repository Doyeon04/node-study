/* wf2-2-2.js */
// let case

// 선언전 사용 불가능
// 값 재할당 가능
// 변수 재선언 불가능
// 블록 밖 참조 불가능

let let_i1;
console.log(let_i1); // undefined

let let_i2 = 10;
console.log(let_i2); // 10
let_i2 = 20;
console.log(let_i2); // 20
let let_i2 = 30; // 재선언 불가능
console.log(let_i2);

let_i3 = 40;
let let_i3 = 50;
console.log(let_i3);

if (true) {
  let let_i4 = 60;
}
console.log(let_i4);

function func1(x, y) {
  return x + y;
}
