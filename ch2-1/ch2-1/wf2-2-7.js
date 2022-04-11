/**
 * wf2-2-7.js
 */

// sayJS 같은 객체의 메서드에 함수 연결시 콜론과 function 안붙여도 됨
const sayNode = function () {
  console.log("Node");
};
const es = "ES";
const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode, //  속성명 = 변수명일 경우
  [es + 6]: "Fantastic", // [변수+값] 으로 객체의 속성명을 객체 리터럴 안에 동적 지정
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
