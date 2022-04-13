// WHATWG의 url 구분 방법

const url = require("url");

const { URL } = url;
const myURL = new URL(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("------------------------------");
const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));

/* 
protocol: http
host: www.gilbut.co.kr
path: book/bookList.aspx?sercate1=001001000
search: ?sercate1=001001000
query: sercate1=001001000
*/
