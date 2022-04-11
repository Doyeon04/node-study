/**
 * 3.4/nextTick.js
 */

setImmediate(() => {
  console.log("immediate");
});
process.nextTick(() => {
  console.log("nextTick");
});
setTimeout(() => {
  console.log("timeout");
}, 0);
Promise.resolve().then(() => console.log("promise"));

// process.nextTick, resolve된 Promise는 다른 콜백들보다 우선시됨
// 이 둘을 마이크로태스크라고 부름
