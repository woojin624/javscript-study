// 배열을 문자열로 변환
{
  const names = ['jang', 'kim', 'lee'];
  // join() - 데이터 값 사이에 seperator를 붙여 문자열로 반환
  // join(seperator: string)
  console.log(names.join()); // jang,kim,lee  >>> 디폴드 값으로 밸류값 사이에 쉼표를 붙여준다.
  console.log(names.join(' --- ')); // jang---kim---lee  >>> seperator를 입력해주면 밸류값 사이에 해당 문자열을 붙여서 반환해준다.

  // toString() - 데이터 값 사이테 ,쉼표를 붙여 문자열로 반환
  console.log(names.toString()); // jang,kim,lee >>> 쉼표를 붙여서 반환
}

// 문자열을 배열로 변환
{
  const names = 'jang, kim, lee, park';

  // split() - seperator로 정해준 문자열을 기준으로 문자열을 데이터 배열로 반환, limit의 수 만큼 배열의 길이로 만듦(optional)
  // split(seperator: string, limit?: number)
  console.log(names.split(', ')); // (4) ["jang", "kim", "lee", "park"]
  console.log(names.split(', ', 2)); // (2) ["jang", "kim"]
}

// 배열의 순서를 거꾸로 변환
{
  const numbers = [1, 2, 3, 4, 5];

  // reverse() - 배열 안에 들어있는 아이템의 순서를 거꾸로 만들어 반환
  const result = numbers.reverse();
  console.log(result); // (5) [5, 4, 3, 2, 1]
  // reverse()는 배열 자체의 값도 변환을 해주고 반환 값도 변환된 값을 반환해준다
  console.log(numbers); // (5) [5, 4, 3, 2, 1]
}

// 배열에서 특정 요소를 제외한 새로운 배열 반환
{
  const numbers = [1, 2, 3, 4, 5];

  // splice() - 배열에서 몇번째에서 몇개를 지울지 입력하면 그 부분을 삭제해준다. 반환값은 삭제된 요소.
  // splice(start: number, deleteCount?: number)
  const result = numbers.splice(0, 2);

  console.log(result); // (2) [1, 2]  새로운 반환 값
  console.log(numbers); // (3) [3, 4, 5]  기존 배열의 값

  const numbers2 = [1, 2, 3, 4, 5];
  const result2 = numbers2.splice(2);

  console.log(result2); // (3) [3, 4, 5] 기존 배열을 바꾸는 게 아닌 새로운 배열로 삭제된 값을 받고 싶으면 start 파라미터만 입력

  // slice() - start값부터 end값 전까지의 배열을 반환
  // slice(start?: number, end?: number)
  const numbers3 = [1, 2, 3, 4, 5];
  const result3 = numbers3.slice(2, 5);
  console.log(result3); // (3) [3, 4, 5]  반환 값으로 start값부터 end값 전까지의 배열을 반환해준다.
  console.log(numbers3); // (5) [1, 2, 3, 4, 5]  splice와는 다르게 기존의 배열을 건드리지 않는다.
}

// ---------------------------
console.clear();

// 객체 배열을 이용한 배열 API 활용

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 20, true, 70), //
  new Student('B', 30, false, 80),
  new Student('C', 26, true, 56),
  new Student('D', 29, true, 90),
  new Student('E', 32, false, 74),
];

// 점수가 90점인 학생 찾기
{
  // find() - Array안에서 첫번째로 찾아진 요소를 반환, predicate가 true일 때 반환하며 true를 찾지 못하면 undefined를 반환
  // find(predicate: (this: void, value: Student, index: number, obj: Student[]) => value is Student, thisArg?: any): Student (+1 overload)
  const result = students.find((student, index) => {
    // console.log(student, index);
    return student.score === 90;
  });

  console.log(result); // Student {name: "D", age: 29, enrolled: true, score: 90}
}

// 수업에 등록된 학생들(enrolled === true)로 배열만들기
{
  // filter() - 콜백함수를 전달해서 콜백함수가 true 요소들로 새로운 배열을 반환해준다.
  // filter(predicate: (value: Student, index: number, array: Student[]) => unknown, thisArg?: any): Student[] (+1 overload)
  const result = students.filter((student) => student.enrolled);
  console.log(result);
  // 0: Student {name: "A", age: 20, enrolled: true, score: 70}
  // 1: Student {name: "C", age: 26, enrolled: true, score: 56}
  // 2: Student {name: "D", age: 29, enrolled: true, score: 90}
}

// 학생들의 배열에 점수만 추출하여 점수 배열 만들기
{
  // map() - Array안에 들어있는 요소 한가지씩 다른 것으로 변환해준다. -> 지정된 콜백함수를 호출하면서 각각의 요소들을 함수를 거쳐 새로운 값으로 변환.
  // map(callbackfn: (value: Student, index: number, array: Student[]) => any, thisArg?: any): any[]
  const result = students.map((student) => student.score);
  console.log(result); // (5) [70, 80, 56, 90, 74]
}

// 학생들 중에 점수가 60점보다 낮은 학생이 있는지 확인
{
  // some() - Array의 요소 중에 콜백함수의 리턴이 true인지 아닌지 확인해준다. -> 배열에서 하나라도 콜백함수의 조건에 맞다면 true를 반환
  // some(predicate: (value: Student, index: number, array: Student[]) => unknown, thisArg?: any): boolean
  const result = students.some((student) => student.score < 60);
  console.log(result); // true

  // some() 함수와 비슷한 것으로 every()가 있다.

  // every() - Array의 요소 전부가 콜백함수의 리턴이 true인지 아닌지 확인해준다. -> 배열에서 모든 요소가 콜백함수의 조건에 맞다면 true를 반환, 하나라도 조건에 맞지 않다면 false를 반환한다.
  // every(predicate: (value: Student, index: number, array: Student[]) => unknown, thisArg?: any): boolean (+1 overload)
  const result2 = students.every((student) => student.score < 60);
  console.log(result2); // false
}

// 학생들의 평균 점수를 구하기
{
  // reduce() - 콜백함수와 초기값을 전달하여 콜백함수로 리턴된 값이 누적되어 반환된다. (값을 모아 놓을 떄)
  // reduce(callbackfn: (previousValue: Student, currentValue: Student, currentIndex: number, array: Student[]) => Student): Student (+2 overloads)
  const result = students.reduce((prev, curr) => {
    // console.log('-----');
    // console.log(prev);
    // console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result); // 총합 370
  console.log(result / students.length); // 평균 74

  // reduceRight() 이라는 것도 있는데 이것은 reduce()와는 반대로 배열의 맨 뒤에서부터 호출을 한다.
}

// 학생들의 모든 점수를 string으로 변환
{
  const result = students.map((student) => student.score).join(', ');
  console.log(result); // 70, 80, 56, 90, 74
}

// 학생들의 모든 점수를 오름차순으로 정렬해서 string으로 변환
{
  const result = students
    .map((student) => student.score)
    .sort()
    // .sort((a, b) => a - b) 오름차순
    // .sort((a, b) => b - a) 내림차순
    .join(', ');
  console.log(result); // 56, 70, 74, 80, 90
}
