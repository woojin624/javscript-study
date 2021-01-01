// 자바스크립트에서의 반복문
// for in, for of

// 일반적인 for 반복문 (복잡함)
// forEach() 반복문 (Array 전용)
// for in 반복문 (Object 전용)
// for of 반복문 (iterable 전용)

// 반복문은 코드를 여러번 실행할 때 뿐만 아니라 Array, Object에서 자료를 꺼내쓸 때 사용한다.

// [1, 2, 3].forEach();

// for (let key in Object) {
// }

// for (let key of Object) {
// }

// -----------------------------------------

// for in 반복문 - Object에 있던 값을 전부 하나씩 꺼내서 사용할 때

// 특징
// 1. enumerable한 data만 반복해준다. - enumerable = 셀 수 있는 (반복문에서 출력해줄 것인지)
// 2. 부모의 prototype도 출력해준다.
const obj = { name: 'jang', age: 10 };

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// ---> {value: "jang", writable: true, enumerable: true, configurable: true}
// 오브젝트에 숨겨진 정보들

for (let key in obj) {
  console.log(key, obj[key]); // ---> name jang, age 10
}

class parent {}
parent.prototype.name = 'lee';

let child = new parent();

for (let key in child) {
  console.log(key, child[key]); // ---> name lee
  // hasOwnProperty를 통해 오브젝트가 부모의 prototype이 아닌 직접적으로 그 key를 가지고 있는지 체크
  if (child.hasOwnProperty(key)) {
    console.log(key, child[key]); // ---> nothing
  }
}

// -------------------------------------------

// for of 반복문 - Array, string, arguments, NodeList, Map, Set 같은 iterable한 자료형에만 사용 가능

let arr = [1, 2, 3, 4];

// data는 arr안에 있던 하나하나의 자료를 의미
for (let data of arr) {
  console.log(data);
}

let str = 'jangwoojin장우진';

// str안에 있던 글자 하나하나를 출력
for (let data of str) {
  console.log(data);
}

console.log(arr[Symbol.iterator]()); // ---> 이러한 것들을 가지고 있는 게 iterable한 자료형
