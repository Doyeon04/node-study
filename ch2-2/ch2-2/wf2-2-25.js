/**
 * wf2-2-25.js
 */

// for 문과 async/await을 같이 써서 프로미스를 순차적으로 실행

// resolve된 promise가 변수에 담겨 나옴
const promise1 = Promise.resolve("Success1");
const promise2 = Promise.resolve("Success2");
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();
