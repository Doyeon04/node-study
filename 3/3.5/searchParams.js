// WHATWG 방식에서 쿼리스트링(search) 부분 처리를 도와주는 객체

const { URL } = require("url");

const myURL = new URL(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
console.log("searchParams:", myURL.searchParams);
// searchParams: URLSearchParams {
//   'page' => '3',
//   'limit' => '10',
//   'category' => 'nodejs',
//   'category' => 'javascript' }
console.log("searchParams.getAll():", myURL.searchParams.getAll("category")); //  [ 'nodejs', 'javascript' ]
console.log("searchParams.get():", myURL.searchParams.get("limit")); //  10
console.log("searchParams.has():", myURL.searchParams.has("page")); // true

console.log("searchParams.keys():", myURL.searchParams.keys()); // URLSearchParams Iterator { 'page', 'limit', 'category', 'category' }
console.log("searchParams.values():", myURL.searchParams.values()); //  URLSearchParams Iterator { '3', '10', 'nodejs', 'javascript' }

myURL.searchParams.append("filter", "es3");
myURL.searchParams.append("filter", "es5");
console.log(myURL.searchParams.getAll("filter")); // [ 'es3', 'es5' ]

myURL.searchParams.set("filter", "es6");
console.log(myURL.searchParams.getAll("filter")); // [ 'es6' ]

myURL.searchParams.delete("filter");
console.log(myURL.searchParams.getAll("filter")); // []

console.log("searchParams.toString():", myURL.searchParams.toString()); // page=3&limit=10&category=nodejs&category=javascript
myURL.search = myURL.searchParams.toString();
