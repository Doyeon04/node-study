/* wf2-2-1.js */
// var case

// var는 함수 스코프를 가지므로 if 문의 블록과 관계없이 접근할 수 있다.
// 선언 전 사용이 가능하다.

var var_i1;
console.log(var_i1); // undefined

var var_i2 = 10;
console.log(var_i2); // 10
var_i2 = 20;
console.log(var_i2); // 20
var var_i2 = 30;
console.log(var_i2); // 30

var_i3 = 40;
var var_i3 = 50;
console.log(var_i3); // 50

if (true) {
  var var_i4 = 60;
}
console.log(var_i4); // 60
