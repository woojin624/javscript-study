// this의 의미와 사용 용도

// 1. ---

// window 객체가 출력 - 기본적인 함수들이 객체안에 들어있다.
console.log(this);

// window 객체가 출력
const func1 = () => {
  console.log(this);
};

func1();

// 2. ---

// object내에서의 this

// method안에서 this를 사용하면 자신을 포함한 해당 method를 가진 object를 출력
let obj = {
  name: 'jang',
  age: 10,
  func: function () {
    console.log(this);
  },
};

obj.func(); // => {name: "jang", age: 10, func: ƒ}

// arrow function을 사용하면 해당 object가 아닌 window를 출력한다.

let obj2 = {
  name: 'jang',
  age: 10,
  func: () => {
    console.log(this);
  },
};

obj2.func(); // => window 객체를 출력

// 전역공간에서 함수나 변수를 생성하면 window객체에 만들어진다. --> window객체는 global object이므로 전역 변수들을 보관한다.

function func2() {
  console.log(this);
}

func2();
window.func2(); // 같은 결과값 출력

// 3. ---

// constructor 안에서 쓰면 새로 생성되는 오브젝트를 뜻한다.

function constructor1() {
  this.name = 'jang'; // ---> 새로 생성되는 오브젝트 (instance)
}

let obj3 = new constructor1(); // console.log(obj3) ---> constructor1 {name: "jang"}

// 4. ---

// eventListener 안에서 사용할 경우 e.currentTarget과 같은 역할을 한다.

document.querySelector('.btn').addEventListener('click', function (e) {
  // this === e.currentTarget
  console.log(this);
  console.log(e.currentTarget);

  let arr = [1, 2, 3, 4, 5];
  arr.forEach(function (a) {
    console.log(a);
    // window 객체를 출력
    console.log(this);
  });
});

let obj4 = {
  names: ['jang', 'kim', 'park'],
  func: function () {
    // 해당 함수를 갖고있는 obj4를 출력 --> {names: Array(3), func: ƒ}
    console.log(this);
    obj4.names.forEach(function () {
      // window 객체를 출력
      console.log(this);
    });
    obj4.names.forEach(() => {
      // arrow function을 사용하면 해당 함수를 갖고있는 obj4를 출력 --> {names: Array(3), func: ƒ}
      console.log(this);
    });
  },
};

obj4.func();
