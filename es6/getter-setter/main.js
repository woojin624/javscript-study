// getter / setter
//

let person1 = {
  name: 'woojin',
  age: 20,
  // 함수를 만들어 object 데이터를 다루는 이유
  // 1. object 자료가 복잡할 때 용이하다.
  // 2. object 자료 수정시 편리하다.
  nextAge() {
    return this.age + 1;
  },
  setAge(a) {
    // 값을 반환하는 함수를 미리 작성해두면
    // age가 문자열로 들어올 경우를 대비하여 parseInt를 통해 안전장치가 가능
    this.age = parseInt(a);
  },
};

person1.setAge(30); // ---> age = 30으로 변경
person1.setAge('40'); // ---> 문자열이 들어와도 age = 40으로 변경

// 즉, 데이터를 꺼내거나 수정할 때 편리하고 실수를 방지해준다. 데이터의 관리가 편하다.

// -----------------------

// set, get

let person2 = {
  name: 'woojin',
  age: 20,
  // getter
  // get은 데이터를 꺼내쓰는 함수에 사용
  // get함수들에는 return이 필수로 있어야한다.
  get nextAge() {
    return this.age + 1;
  },
  // setter
  // set은 데이터를 변경하는 함수에 사용
  // set함수들에는 파라미터가 꼭 1개가 있어야한다. (2개 안됨)
  set setAge(a) {
    this.age = parseInt(a);
  },
};

// set키워드를 사용하면 소괄호를 생각하고 입력할 수 있다.
person2.setAge = '30'; // ---> age: 30
person2.nextAge; // ---> age: 31

// ---------------------

// class에서 사용하는 get/set

class Person {
  constructor() {
    this.name = 'Woojin';
    this.age = 20;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(a) {
    this.age = parseInt(a);
  }
}

let person3 = new Person();

// 데이터를 출력하고 수정하는 함수를 만드는 이유는 데이터의 무결성 때문.
