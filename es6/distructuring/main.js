// Distructuring

// Array 데이터를 전부 변수에 담으려면?

// 비효율적이고 복잡한 방식
let arr1 = [1, 2, 3];

let a1 = arr1[0];
let b1 = arr1[1];
let c1 = arr1[2];

// 이것을 효율적으로 만들어주는 문법
let arr2 = [1, 2, 3];

let [a2, b2, c2] = arr2;

let arr3 = [1, 2];
// Array Destructuring 할 때 몇개가 빠진다면 - 등호로 default값 지정 가능
let [a3 = 8, b3 = 9, c3 = 10] = arr2;

// -----------------------

// Object 데이터를 꺼내 변수에 담으려면?

// 비효율적인 방식
const obj1 = { name1: 'woojin', age1: 20 };
let name1 = obj1.name1;
let age1 = obj1.age1;

// destructuring으로 효율적인 방법
// 변수명을 Object의 key값과 똑같이 써야한다.
const obj2 = { name2: 'woojin', age2: 20 };
// let { name2, age2 } = obj2;

// object데이터로 default값 지정 가능
// 변수명 또한 콜론으로 새로 지정가능하다.
let { name2: myName = 'none', age2: myAge = 30 } = obj2;

// ------------------------

// 반대로 변수들을 object에 집어넣고 싶은 경우

let name3 = 'woojin';
let age3 = 200;

// let obj = { name3: name3, age3: age3 };
// 위의 object의 key값과 value값이 같다면 축약해서 입력이 가능하다.
const obj3 = { name3, age3 };

// -------------------------

// 함수 파라미터 만들 떄도 Destructuring 문법 사용 가능

const obj4 = { name4: 'woojin', age4: 20 };

// 파라미터와 key값의 이름이 같아야한다.
function func1({ name4, age4 }) {
  console.log(name4);
  console.log(age4);
}

func1(obj4);

// Array의 경우
function func2([name, age]) {
  console.log(name);
  console.log(age);
}

func2(['woojin', 40]);
