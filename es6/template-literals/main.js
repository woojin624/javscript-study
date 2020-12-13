// backquote, backtick

let str1 = '자바스크립트';

let p1 = '오늘은 ' + str1 + ' 공부를 합니다.';

// 백틱을 활용한 문자열 작성
let p2 = `오늘은 ${str1} 공부를 합니다.`;

// Tagged Literals

// ES6는 tagged literals라고 해서 함수로 문자 해체분석기능을 만들어줄 수도 있다.
// 문자 중간중간에 있는 단어 순서를 바꾸거나 변수를 제거하거나 할 때 유용.

function taggedLiterals1(strings, variables) {
  console.log(strings); // 문자들이 출력 -- ${}를 기준으로 양 옆에 있는 모든 문자 덩어리를 Array에 넣어준다.
  console.log(variables); // 변수들이 출력
}

taggedLiterals1`오늘은 ${str1} 공부를 합니다.`;

// 단어 순서 바꿔보기

let apple = 0;
let grape = 10;
console.log(`사과를 ${grape} 포도를 ${apple}개 구입했습니다.`);
// 위 문장에서 사과와 포도 단어의 위치를 바꾸기

function taggedLiterals2(strings, variables1, variables2, variables3) {
  if (variables3 === 0) {
    variables3 = '다 팔려서';
    return console.log(strings[2] + variables1 + strings[1] + variables2 + '사과는 ' + variables3 + ' 못샀어요');
  }
  console.log(strings[2] + variables1 + strings[1] + variables2 + strings[0] + variables3 + strings[3]); // ---> 포도를 10개 구입하고 사과를 5개 구입했습니다.
}

taggedLiterals2`사과를 ${grape}개 구입하고 ${``}포도를 ${apple}개 구입했습니다.`;
