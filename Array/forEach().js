// forEach()
// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void

// Array에서 for문과 마찬가지로 반복적인 기능을 수행할 때 사용
// 배열의 처음부터 끝까지 돌면서 배열의 모든 요소에 콜백함수의 기능을 수행

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((v) => console.log(v));
// for문에 비해 깔끔하고 직관적임

arr.forEach((v, i, arr) => {
  console.log(`요소는 ${v}, 인덱스는 ${i}, 해당 배열은 ${arr}`);
});

// forEach는 callback 함수 이외에 thisArg라는 객체(Object) 인자도 사용할 수 있다

const obj1 = { name: 'jang' };
const obj2 = { name: 'park' };

arr.forEach(function (v) {
  console.log(`v : ${v}, obj1을 this값으로 받아 올 때 : ${this.name}`); // v : 1, obj1을 this값으로 받아 올 때 : jang
}, obj1);

// 여기서 this값을 사용할 때 arrow function을 사용하면 obj에 대한 인식이 안된다
arr.forEach((v) => {
  console.log(`v : ${v}, obj1을 this값으로 받아 올 때 : ${this.name}`); // v : 1, obj1을 this값으로 받아 올 때 :
}, obj1);

// 또한 forEach는 for문 처럼 continue나 break를 통한 제어가 불가능하다
