/**
 * 3.4/this_testcode1.js
 */

firstname = "k";
const obj = {
  firstname: "s",
  getFirstname: function () {
    console.log(this); // this: obj
    return this.firstname; // s
  },
  getFirstnameArr: () => {
    console.log(this); // this: {}
    return this.firstname; // undefined
  },
  getFirstnameES6() {
    console.log(this); // this: obj
    return this.firstname; // s
  },
};

console.log(obj.firstname); // s
console.log("----------------");
console.log(obj.getFirstname());
console.log("----------------");
console.log(obj.getFirstnameArr());
console.log("----------------");
console.log(obj.getFirstnameES6());

// 1을 생략한 버전이 3
// this가 global을 가리켰다면 firstname이 k, object를 가리키면 s, 빈 객체를 가리키면 undefined
