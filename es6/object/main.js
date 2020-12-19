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
