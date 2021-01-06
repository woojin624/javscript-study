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
