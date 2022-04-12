// 여러 개의 워커 스레드에 데이터를 넘김

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // 부모일 때
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      // new Worker를 호출할 때 두번째 인수의 workerData 속성으로 원하는 데이터 호출
      workerData: { start: 1 },
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );
  for (let worker of threads) {
    worker.on("message", (message) => console.log("from worker", message));
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log("job done");
      }
    });
  }
} else {
  // 워커일 때
  const data = workerData; // 부모로부터 데이터를 받음
  parentPort.postMessage(data.start + 100); // 부모로부터 숫자를 받아 100을 더해 돌려줌
  // 돌려주는 순간 워커 종료
}
