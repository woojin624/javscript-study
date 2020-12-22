// Class
// es6에서의  상속 기능을 구현하는 constructor

class Parents {
  constructor(a) {
    this.name = a;
    // 클래스 내에 함수는 2가지 방법으로 넣을 수 있다.
    // 여기에 작성하면 생성되는 instance에 직접적으로 추가된다.
    // this.sayHi = function () {
    //   console.log('Hi');
    // };
  }
  // 여기에 작성하면 생성되는 instance에 추가되지 않고 부모요소의 prototype에 추가된다.
  sayHi() {
    console.log('Hi');
  }
}

let child = new Parents('jang');
console.log(child); // ---> Parents {name: "jang"}
// ---> 객체지향 문법을 왜 쓰냐? - 여러개의 Object를 만들어서 쓰고 싶어서.

// -------------------------------------

// extends / super

class Parent1 {
  constructor(firstName) {
    this.lastName = 'jang';
    this.firstName = firstName;
  }
  sayHi() {
    console.log('Hi');
  }
}
let parent11 = new Parent1('woojin'); // ---> Parent1 {lastName: "jang", firstName: "woojin"}

// extends(class 상속) - 기존 클래스와 유사한 클래스를 만들기 위함
class Child1 extends Parent1 {
  constructor(firstName) {
    // extends를 통해 클래스의 속성을 상속 받으려면 constructor 내부에 super()를 사용해야한다.
    // super() - 물려받는 클래스의 constructor
    super(firstName);
    this.age = 20;
  }
  sayHi() {
    console.log('Hello');
    // constructor 밖에서 사용하는 super는 부모 클래스의 prototype을 의미한다.
    super.sayHi(); // ---> Hi
  }
}
let child11 = new Child1('jinwoo'); // ---> Child1 {lastName: "jang", firstName: "jinwoo", age: 20}
