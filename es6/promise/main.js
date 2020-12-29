// Promise
// 콜백함수와 마찬가지로 함수 디자인패턴.

// const promise1 = new Promise();

// promise1
//   // then - 프로미스가 성공할 경우 실행할 코드
//   .then(function () {
//     console.log('success');
//   })
//   // catch - 프로미스가 실패할 경우 실행할 코드
//   .catch(function () {
//     console.log('failed');
//   });
//

// 콜백함수를 쓰기 싫은 경우. 콜백함수보다 코드를 좀 더 깔끔하게 쓰고 싶은 경우 사용하는 것이 promise
// Promise 예시 1
const promise2 = new Promise(function (resolve, reject) {
  let operate = 1 + 1;
  // resolve 같은 함수에 파라미터로 값 입력시 데이터 전달가능
  resolve(operate);
});

promise2
  .then(function (result) {
    console.log('success');
    // 위의 Promise에서 전달된 데이터를 result로 출력
    console.log(result);
  })
  .catch(function () {
    console.log('failed');
  });

// ------------------------------
// Promise 예시 2
// 1초 후에 성공하는 Promise 그리고 성공 시 특정 코드를 실행
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
});

promise3
  .then(function () {
    console.log('success');
  })
  .catch(function () {
    console.log('failed');
  });

// -------------------------

// 특징
// Promise의 3가지 상태

// promise를 출력해보면 Object형태로 출력된다.

// 1. 성공하면 <fullfilled>
// 2. 판정 대기중이면 <pending>
// 3. 실패하면 <rejected>

// promise는 비동기가 아닌 콜백을 대체하는 함수 디자인 패턴

// 이미지 로딩 성공시 특정 코드를 실행

const imgLoad = new Promise(function (resolve, reject) {
  const img = document.querySelector('.image-test');
  img.addEventListener('load', function () {
    resolve();
  });
  img.addEventListener('error', function () {
    reject();
  });
});

imgLoad
  .then(function () {
    console.log('img load success');
  })
  .catch(function () {
    console.log('img load failed');
  });
