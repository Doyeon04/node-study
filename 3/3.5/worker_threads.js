// worker_threads 모듈 사용 - 노드에서 멀티 스레드 방식으로 작업하는 방법

const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // 부모일 때
  const worker = new Worker(__filename); // 현재 파일을 워커 스레드에서 실행
  worker.on("message", (message) => console.log("from worker", message)); // 메세지를 받음
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping"); // 워커에 데이터를 보냄
} else {
  // 워커일 때
  parentPort.on("message", (value) => {
    // 부모로부터 메세지를 받음
    console.log("from parent", value);
    parentPort.postMessage("pong"); // 부모에게 메세지를 보냄
    parentPort.close(); // 부모와의 연결 종료
  });
}
