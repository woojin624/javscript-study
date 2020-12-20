// Data Types
// 객체지향 문법 시작 전에 알아야하는  Primitive data type, Reference data type

// Primitive Data Type

let name1 = 'jang';
let name2 = name1;
name1 = 'choi';

console.log(name1, name2); // ---> 'choi', 'jang'
// 해당 방식은 primitive data type으로 저장됐기에 name1의 값을 바꾸어도 name2에 처음 할당된 'jang'이란 값은 변하지 않는다.

// 하지만 reference data type으로 저장될 경우 상황이 달라진다.

// ------------------------------------

// Reference Data Type

let obj1 = { name: 'jang' };
let obj2 = obj1;
obj1.name = 'choi';

console.log(obj1.name, obj2.name); // ---> 'choi', 'choi'
// 해당 방식은 reference data type으로 저장됐으므로 obj2는 obj1의 값을 참조한다. 따라서 obj1의 값에 변화가 생기면 obj2의 값도 바뀌게 된다.

// Object를 변경해주는 함수를 사용할 경우

let myObj = { data: 'down' };

// 오브젝트 데이터를 바꿀 경우
function changeObjData(obj) {
  obj.data = 'up';
}
changeObjData(myObj); // ---> myObj.data가 up으로 바뀜

// 오브젝트 자체를 바꿀 경우
function changeObj(obj) {
  obj = { data: 'up' };
}
changeObj(myObj); // ---> myObj.data가 up으로 바뀌지않고 down 그대로 있음
// 파라미더는 변수생성 & 할당과 똑같다. 그 파라미터 변수에 = {} 해봤자 원래의 오브젝트를 변경하지 못한다.

// -------------------------------------

// Object를 만들어내는 Constructor

// 비슷한 Student Object를 여러개 만들려면 constructor라는 object 생성 기계를 만든다.

function Student(a, b) {
  this.year = 1;
  this.class = 'B';
  this.name = a;
  this.age = b;
}

let student1 = new Student('jang', 17);
let student2 = new Student('Kim', 16);

// 사용된 constructor의 양식에 맞춰서 오브젝트가 생성된다.
// 이렇게 새로 생성된 object를 instance라고 부른다.
// 그리고 이런 instance를 만드는 것을 object 생성 기계 즉, constructor 혹은 생성자라고 부른다.
console.log(student1); // ---> Student {year: 1, class: "B", name: "jang", age: 17}
console.log(student2); // ---> Student {year: 1, class: "B", name: "Kim", age: 16}

// -----------------------------------------

// javascript에만 있는 상속을 구현할 수 있는 prototype 문법

// 이렇게 constructor를 만들면 prototype이라는 공간이 자동으로 생긴다.
function CellPhone(a, b) {
  this.model = 'iPhone';
  this.series = a;
  this.color = b;
}

CellPhone.prototype.brand = 'Apple';

let phone1 = new CellPhone('12Pro', 'Graphite');

console.log(phone1); // ---> CellPhone {model: "iPhone", series: "12Pro", color: "Graphite"}
console.log(phone1.brand); // ---> Apple
// phone1로 찍어냈을 때는 brand 속성값이 조회되지 않았지만 phone1.brand로 찍어보면 나온다. 이게 prototype으로 상속을 받은 경우

// __proto__ 부모요소의 prototype을 검사
console.log(phone1.__proto__); // ---> {brand: "Apple", constructor: ƒ}

let parent = { name: 'jang' };
let child = {};
child.__proto__ = parent; // __proto__는 부모의 prototype 등록

console.log(child.name); // ---> jang
