/**
 * wf2-2-21.js
 */

const promise1 = Promise.resolve("Success1");
const promise2 = Promise.resolve("Success2");

Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ['Success1', 'Success2'];
  })
  .catch((error) => {
    // 하나라도 실패하면 catch로 이동
    console.error(error);
  });

// 프로미스가 여러 개 있을 때 Promise.all에 넣으면
// 모두 resolve될 때까지 기다렸다가 then 으로 넘어감.
