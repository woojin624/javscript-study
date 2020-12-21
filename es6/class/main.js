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
