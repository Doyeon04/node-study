/**
 * wf2-2-17.js
 */

const condition = true; // true면 resolve, false면 reject

// new Promise로 프로미스를 생성하고 그 내부에 resolve와 reject를 매개변수로 갖는 콜백함수 넣음

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success");
  } else {
    reject("Fail");
  }
});
// 다른 코드가 들어갈 수 있음
promise
  .then((message) => {
    console.log(message); // resolve case
    // Success 출력
  })
  .catch((error) => {
    console.error(error); // reject case
  })
  .finally(() => {
    // Default case
    console.log("Default");
  });
