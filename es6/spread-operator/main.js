// Spread Operator
// Array나 Object에서 괄호를 제거해주는 연산자

// Array

let arr = [1, 2, 3, 4, 5];
console.log(...arr); // ---> 1 2 3 4 5

let str = 'javascript';
console.log(...str); // ---> j a v a s c r i p t
console.log('j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'); // ---> 위와 같은 결과

let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e'];

// Array를 복사하거나 합칠 때 사용
let arr3 = [...arr1, ...arr2];
console.log(arr3); // ---> (5) ["a", "b", "c", "d", "e"]

// Array를 Deep copy할 때 유용

// arr1에 있는 값을 복사하여 사용하고 싶을 때

let arr4 = arr1; // ---> 해당 방식으로 값을 할당하면 Array를 복사하는 것이 아닌 arr1로 참조하는 것. 따라서 arr1의 값에 변화가 생기면 arr4의 값도 바뀐다.
let arr5 = [...arr1]; // ---> 해당 방식으로 값을 할당하면 arr1을 복사해온 것이기 때문에 arr1의 값에 변화가 생겨도 arr5는 변하지 않는다. 즉 독립적인 값을 갖게 된다. (Deep copy)

// ---------------------------------------------

// Object

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = {
  ...obj1,
  d: 4,
  e: 5,
};

console.log(obj2); // ---> {a: 1, b: 2, c: 3, d: 4, e: 5}. obj1의 값을 복사해서 독립적인 obj2의 값을 갖는다.

// ** Array와 Object는 Reference Data Type이므로 값이 필요한 경우 Spread Operator를 통하여 복사해온다.

// ---------------------------------------------

// function param을 넣을 때

function add(a, b, c) {
  console.log(a + b + c);
}

add(1, 3, 5); // ---> 9

let arr6 = [3, 6, 9];

add(...arr6); // add(3, 6, 9) ---> 18

// 이전에 사용하던 방식
add.apply(undefined, arr6);
