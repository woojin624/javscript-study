// map()
// map(callbackfn: (value: Student, index: number, array: Student[]) => any, thisArg?: any): any[]

const arr = [1, 2, 3, 4, 5, 6];

// Array안에 들어있는 요소 한가지씩 다른 것으로 변환해준다. -> 지정된 콜백함수를 호출하면서 각각의 요소들을 함수를 거쳐 새로운 값으로 변환.
{
  const result = arr.map((v) => v * 2);
  console.log(result); // [2, 4, 6, 8, 10, 12]
}

// index와 arr을 받아와 사용 가능
{
  const result = arr.map((v, i, arr) => v * arr[arr.length - i - 1]);
  console.log(result); // [6, 10, 12, 12, 10, 6]
}

// 중복된 값을 제거하고 종류 별로 뽑아오기
// 학생들이 듣고있는 전공이 어떤 것들인지 중복없이 배열로 받아오기
{
  const students = [
    { name: '김', age: 26, major: '수학교육과' },
    { name: '박', age: 20, major: '산업디자인과' },
    { name: '이', age: 22, major: '컴퓨터공학과' },
    { name: '최', age: 21, major: '산업디자인과' },
    { name: '나', age: 21, major: '사회체육과' },
    { name: '장', age: 24, major: '수학교육과' },
  ];
  // Set은 중복값을 없애주는 객체이다. 이것을 전개연산자로 펼친 뒤 배열로 감싸주었다
  const majors = [...new Set(students.map((v) => v.major))];
  console.log(majors); // ["수학교욱과", "산업디자인과", "컴퓨터공학과", "사회체육과"]
}

// 프로그래머스 문제 중 - x만큼 간격이 있는 n 개의 숫자..
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
// n개의 길이를 가지는 Array를 생성, 그 배열을 x값으로 들어오는 숫자로 채운다.
// [3, 3, 3, 3, 3, 3, 3, 3] -> 그 후 index값 + 1을 각 위치에 곱해준다.
console.log(solution(3, 12)); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
