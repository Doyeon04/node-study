/**
 * 3.4/this_testcode2.js
 */

fistname = "empty";
const obj1 = {
  fistname: "s",
  getFirstName: function () {
    return this.fistname;
  },
  getFirstnameArrWithThis: () => {
    // this는 빈 객체 가리키므로
    return this.fistname; // undefined
  },
  getFirstnameArrWithoutThis: () => {
    return fistname; // global scope의 firstname 참조. empty
  },
  getFirstnameES6() {
    return this.fistname;
  },
  getThis: function () {
    return this; // obj1
  },
  getThisArr: () => {
    return this; // {}
  },
  getThisES6() {
    return this; // obj1
  },
  getSurname: function () {
    // this 는 obj1를 가리킨다.
    console.log(`\n\ngetSurname()...`);
    const surname = "park";
    console.log(`this.fistname: ${this.fistname}`); // seunghyun

    function fullname() {
      // obj 안 함수안의 함수 속 this는 global을 가리킨다.
      // this: global
      console.log(
        `>> fistname:${fistname}, surname:${surname}, this.fistname:${
          this.fistname
        }, this.surname:${this.surname}, this===global:${this === global}`
      ); // >> fistname:empty, surname:park, this.fistname:empty, this.surname:undefined, this===global:true
      return `>>>> obj1.fistname + surname: ${obj1.fistname} ${surname}`; // seunghyun park
    }
    return fullname();
  },
  // getSurname: function(){
  //     console.log(`\n\ngetSurname()...`);
  //     const surname = 'park';
  //     console.log(`this.fistname: ${this.fistname}`);
  //     const fullname = () => {  // with array function
  //         // this: obj1
  //         console.log(`>> fistname:${fistname}, surname:${surname}, this.fistname:${this.fistname}, this.surname:${this.surname}, this===obj1:${this===obj1}`);
  //         return `this.fistname + surname: ${this.fistname} ${surname}`;
  //     };
  //     return fullname();
  // },
  getSurname_bind: function () {
    console.log(`\ngetSurname_bind()...`);
    const surname = "park";
    console.log(`this.fistname: ${this.fistname}`); // seunghyun
    function fullname() {
      // this: global -> obj1
      console.log(
        `>> fistname:${fistname}, surname:${surname}, this.fistname:${
          this.fistname
        }, this.surname:${this.surname}, this===obj1:${this === obj1}`
      );
      // >> fistname:empty, surname:park, this.fistname:seunghyun, this.surname:undefined, this===obj1:true
      return `>>>> this.fistname + surname: ${this.fistname} ${surname}`;
    }
    let fullname_bind = fullname.bind(this); // this: obj1
    // bind함수를 쓰면 원래의 this는 global을 가리켰는데 obj1를 가리키게 만듬
    return fullname_bind();
  },
  getSurnameArr: () => {
    // with array function
    // 화살표 함수 안의 this는 {}
    console.log(`\ngetSurnameArr()...`);
    const surname = "park";
    console.log(`this.fistname: ${this.fistname}`); // undefined
    const fullname = () => {
      // with array function
      // this: module.exports = {}
      console.log(
        `>> fistname:${fistname}, surname:${surname}, this.fistname:${
          this.fistname
        }, this.surname:${this.surname}, this===module.exports:${
          this === module.exports
        }`
        // >> fistname:empty, surname:park, this.fistname:undefined, this.surname:undefined, this===module.exports:true
      );
      return `>>>> obj1.fistname + surname: ${obj1.fistname} ${surname}`; // seunghyun park
    };
    return fullname();
  },
  // getSurnameArr: () => { // with array function
  //     console.log(`\ngetSurnameArr()...`);
  //     const surname = 'park';
  //     console.log(`this.fistname: ${this.fistname}`);
  //     function fullname (){
  //         // this: global
  //         console.log(`>> name:${name}, surname:${surname}, this.fistname:${this.fistname}, this.surname:${this.surname}, this===module.global:${this===global}`);
  //         return `>>>> obj1.fistname + surname: ${obj1.fistname} ${surname}`;
  //     }
  //     return fullname();
  // },
  getSurnameES6() {
    console.log(`\ngetSurnameES6()...`);
    const surname = "park";
    console.log(`this.fistname: ${this.fistname}`); // seunghyun
    const fullname = () => {
      // with array function
      // this: obj1
      // obj1안 함수 안 화살표 함수에서의 this는 obj1를 가리킨다.
      console.log(
        `>> fistname:${fistname}, surname:${surname}, this.fistname:${
          this.fistname
        }, this.surname:${this.surname}, this===obj1:${this === obj1}`
      );
      // >> fistname:empty, surname:park, this.fistname:seunghyun, this.surname:undefined, this===obj1:true
      return `>>>> this.fistname + surname: ${this.fistname} ${surname}`; // seunghyun park
    };
    return fullname();
  },

  //화살표 함수는 일반 객체 안에서는 this가 {}를 가리키고, 함수 안의 화살표함수에서는 상위 obj를 가리킨다.

  // getSurnameES6 (){
  //     console.log(`\ngetSurnameES6()...`);
  //     const surname = 'park';
  //     console.log(`this.fistname: ${this.fistname}`);
  //     function fullname (){
  //         // this: global
  //         console.log(`>> name:${name}, surname:${surname}, this.fistname:${this.fistname}, this.surname:${this.surname}, this===global:${this===global}`);
  //         return `>>>> this.fistname + surname: ${this.fistname} ${surname}`;
  //     };
  //     return fullname();
  // },
};

console.log(obj1);
console.log(`> obj1.fistname: ${obj1.fistname}\n`); // s

obj1.fistname = "seunghyun";
console.log(obj1); // firstname이 seunghyun으로 바뀜
console.log(`> getFirstname(): ${obj1.getFirstName()}`); // seunghyun
console.log(`> getFirstnameArrWithThis(): ${obj1.getFirstnameArrWithThis()}`); // undefined
console.log(
  `> getFirstnameArrWithoutThis(): ${obj1.getFirstnameArrWithoutThis()}` // empty
);
console.log(`> getFirstnameES6(): ${obj1.getFirstnameES6()}\n`); // seunghyun

console.log(`> obj1.getThis() === obj1 : ${obj1.getThis() === obj1}`); // getThis의 this가 obj1를 가리킴
console.log(
  `> obj1.getThisArr() === module.exports : ${
    obj1.getThisArr() === module.exports // 둘 다 {}를 가리킴
  }`
);
console.log(`> obj1.getThisES6() === obj1 : ${obj1.getThisES6() === obj1}\n`);

console.log(obj1.getSurname());
console.log(obj1.getSurname_bind());
console.log(obj1.getSurnameArr());
console.log(obj1.getSurnameES6());
