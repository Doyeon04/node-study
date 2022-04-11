/* wf2-2-3.js */
// const case

// 값 미할당 불가능
// 값 재할당 불가능
// 상수 재선언 불가능
// 선언전 사용 불가능 
// 블록 밖 참조 불가능 

const const_i1;
console.log(const_i1);

const const_i2 = 10;
console.log(const_i2);
const_i2 = 20;
console.log(const_i2);
const const_i2 = 30;
console.log(const_i2);

const_i3 = 40;
const const_i3 = 50;
console.log(const_i3);

if (true) {
    const const_i4 = 60;
}
console.log(const_i4);