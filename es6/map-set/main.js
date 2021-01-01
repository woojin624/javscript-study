// Map / Set 자료형

// Map --- key, value를 저장하는 Map 자료형

let person = new Map();

// Map에 자료를 저장하려면 set을 사용한다.
person.set('name', 'Kim');
person.set('age', 20);

// 화살표가 쓰이는 이유
// Map 자료형은 자료간의 연관성을 표현하기 위해 쓴다.
console.log(person); // ---> Map(2) {"name" => "Kim", "age" => 20}

// Map에서 자료 꺼내는 법
console.log(person.get('age')); // ---> 20

// Map에서 자료 삭제하는 법
person.delete('age');
console.log(person); // ---> Map(1) {"name" => "Kim"}

person.set('age', 20);
person.set('location', 'Seoul');

// 자료 갯수 세는 법
console.log(person.size); // ---> 1

// 반복문으로 Map에서 자료 꺼내는 법
for (let key of person.keys()) {
  console.log(key, person.get(key));
}

// Map 자료형에 직접 자료 집어넣을 땐

let person1 = new Map([
  ['name', 'Jang'],
  ['age', 10],
  ['location', 'Seoul'],
]);
console.log(person1);

// ------------------------------------

// Set --- 중복자료를 허용하지 않는 Array 비슷한 것

let list = ['kim', 'na', 'park', 'lee', 'na'];
console.log(list); // ---> (5) ["kim", "na", "park", "lee", "na"]

let list2 = new Set(['kim', 'na', 'park', 'lee', 'na']);
console.log(list2); // ---> Set(4) {"kim", "na", "park", "lee"}
// 중괄호 형태로 저장, 중복을 허용하지 않기 때문에 'na'한개가 삭제.

list2.add('jang');
console.log(list2); // ---> Set(5) {"kim", "na", "park", "lee", "jang"}

console.log(list2.has('kim')); // ---> true
console.log(list2.size); // ---> 5

// Set 자료형 <--> Map 자료형
// Array의 중복자료를 제거하고 싶으면?
// Array를 Set자료형에 담은 후 spread-operator로 다시 Array에 담는다.

let list3 = ['david', 'dean', 'sam', 'castiel', 'crowly', 'dean', 'david'];
let list4 = new Set(list3);
console.log(list4); // ---> Set(5) {"david", "dean", "sam", "castiel", "crowly"}

list3 = [...list4];
console.log(list3); // ---> (5) ["david", "dean", "sam", "castiel", "crowly"]
