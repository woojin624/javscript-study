// Array 자료형 기본 개념 및 내장 API 복습

// 1. 배열의 선언
const arr1 = new Array();
const arr2 = [1, 2];

// ----------------------------------

// 2. 배열의 인덱스
const names = ['jang', 'kim', 'lee'];
// 배열의 길이
console.log(names.length); // 3
// 배열의 인덱스에 맞는 값 출력하기
console.log(names[1]); // kim
// 길이보다 큰 값 입력 시 undefined 반환
console.log(names[123]); // undefined
// 배열의 마지막 값 받아오기
console.log(names[names.length - 1]); // lee

// ----------------------------------
console.clear();

// 3. 배열의 반복문

// for
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  // jang
  // kim
  // lee
}

// for of - 배열안의 밸류들을 한번씩 할당하면서 블록을 실행
for (let name of names) {
  console.log(name);
  // jang
  // kim
  // lee
}

// forEach - 배열안에 들어있는 밸류들 마다 전달한 함수를 출력
names.forEach((name, index) => {
  console.log(name, index);
  // jang 0
  // kim 1
  // lee 2
});

// ----------------------------------
console.clear();

// 4. 배열에 아이템을 추가, 삭제, 복사

// - push: 아이템을 배열의 맨 뒤에 삽입
names.push('park', 'shin');
console.log(names); // (5) ["jang", "kim", "lee", "park", "shin"]

// - pop: 배열의 맨 뒤의 아이템을 삭제
names.pop();
names.pop();
console.log(names); // (3) ["jang", "kim", "lee"]

const popedItem = names.pop(); // pop된 아이템을 반환
console.log(popedItem); // lee

// - unshift: 아이템을 배열의 맨 앞에 삽입
names.unshift('choi');
console.log(names); // (4) ["choi", "jang", "kim", "lee"]

// - shift: 배열의 맨 앞의 아이템을 삭제
names.shift();
console.log(names); // (3) ["jang", "kim", "lee"]

// !!! shift와 unshift는  push와 pop보다 훨씬 느리다.
// push와 pop은 데이터의 맨 뒤의 값만 넣고 빼면 되지만
// shift와 unshift는 맨 앞의 데이터를 넣고 뺄 때 뒤의 값들의 위치를 한칸 씩 전부 이동해야한다.

// - splice: 원하는 인덱스의 아이템 삭제
names.push('park', 'song', 'han', 'choi');
console.log(names); // (7) ["jang", "kim", "lee", "park", "song", "han", "choi"]

// names.splice(1); // 몇개를 지울지 말 안하고 인덱스만 입력하면 지정한 인덱스로부터 모든 데이터를 지운다.
// console.log(names); // jang

names.splice(1, 1); // 1번 인덱스부터 1개 삭제
console.log(names); // (6) ["jang", "lee", "park", "song", "han", "choi"]

names.splice(1, 1, 'go', 'do'); // 몇 개 삭제할지 지정한 후 뒤에 데이터를 입력하면 삭제된 자리에 해당 데이터들이 삽입된다.
console.log(names); // (7) ["jang", "go", "do", "park", "song", "han", "choi"]

// - concat: 두 개의 배열을 결합
const names2 = ['cha', 'jeong'];
const newNames = names.concat(names2);
console.log(newNames); // (9) ["jang", "go", "do", "park", "song", "han", "choi", "cha", "jeong"]

// --------------------------------------
console.clear();

// 5. 배열의 인덱스 검색
console.log(names);

// - indexOf: 밸류값을 입력하여 해당 밸류의 인덱스 값 반환
console.log(names.indexOf('park')); // 3
console.log(names.indexOf('jang')); // 0

console.log(names.indexOf('kang')); // -1  배열 안에 없는 값을 입력하면 -1 반환

// - includes: 밸류값을 입력하여 해당 밸류가 배열안에 있다면 true 없다면 false 반환
console.log(names.includes('go')); // true
console.log(names.includes('kang')); // false

// - lastIndexOf: 배열 안에 중복된 밸류가 있다면 가장 마지막에 있는 인덱스를 반환
names.push('park');
console.log(names);
console.log(names.indexOf('park')); // 3 ---- indexOf는 밸류 값으로 검색했을 때 가장 처음 만나게 되는 밸류의 인덱스를 반환한다.
console.log(names.lastIndexOf('park')); // 7 ---- lastIndexOf는 밸류 값으로 검색했을 때 가장 마지막으로 나오는 밸류의 인덱스를 반환한다.
