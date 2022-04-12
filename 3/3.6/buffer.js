const buffer = Buffer.from("저를 버퍼로 바꿔보세요"); // 문자열을 버퍼로
console.log("from():", buffer);
console.log("length:", buffer.length);
console.log("toString():", buffer.toString()); // 버퍼를 문자열로

const array = [
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(array); // 배열 안에 든 버퍼를 하나로 합침
console.log("concat():", buffer2.toString());

const buffer3 = Buffer.alloc(5); // 지정된 크기만큼의 빈 버퍼 생성
console.log("alloc():", buffer3);
