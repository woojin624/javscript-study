// callback

// 자바스크립트는 일반적으로 동기식(Synchronous) 처리로 진행된다.
// - 한번에 코드 한줄씩 차례로 실행

// 그와는 반대로 비동기식(Asyncronous) 처리라는 것이있다.

// 가장 쉽게 비동기식 방법을 보여주는 것은 setTimeout
console.log(1);
// 코드 실행까지 1초라는 대기시간이 필요
setTimeout(() => {
  console.log(2);
}, 1000);
const element = document.querySelector('body');
// 코드 실행까지 클릭이라는 이벤트가 필요
element.addEventListener('click', function () {
  console.log(3);
});
console.log(4);

// 이러한 대기시간이 필요한 코드들을 브라우저는 Web API라는 공간으로 보낸다.

// Javascript를 순차적으로 실행할 때는 콜백함수를 사용한다.
// 콜백함수란 쉽게 말해 함수안의 함수이다.
function func1(f) {
  console.log('첫번째 함수');
  f();
}

function func2() {
  console.log('두번째 함수');
}

// func1을 실행한 후에 func2를 실행하고 싶다면 함수 파라미터로 함수를 입력한다. 이때 파라미터로 들어간 함수에서 소괄호는 생략.
// 콜백함수는 함수 디자인 패턴일 뿐이며 이것은 비동기가 아니다.
func1(func2);
