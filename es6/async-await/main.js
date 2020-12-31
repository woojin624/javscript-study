// async / await - es8문법부터 제공

// async
// 함수 앞에 async를 붙이면 Promise 오브젝트가 남게된다
async function add() {
  let a = 1 + 1;
  return a;
}

// 그럼 이후 함수 사용시에 Promise처럼 then, catch등을 사용 가능
add().then(function (result) {
  console.log('success');
  console.log(result);
});

// ------------------------------

// async-await

async function add1() {
  const promise = new Promise(function (resolve, reject) {
    let a = 1 + 1;
    resolve(a);
  });

  // await키워드를 통해 promise가 끝날때까지 기다린다.
  // async function안에서 쓰는 await. 이것은 then대신 사용가능.
  const result = await promise;
  console.log(result);

  // 위의 await로 쓴 방식은 아래의 방식으로도 표현 가능하다.
  // promise.then(function (a) {
  //   console.log(a);
  // });
}

add1();

// --------------------------------

// try{} catch{}
// await에서는 .then().catch() 처럼 성공과 실패를 한번에 쓸 수 없고 성공만 표현할 수 있기 때문에
// try,catch구문으로 실패했을 때의 코드를 잡아준다.
// 실패가 안날거라고 자신하면 try/catch를 굳이 쓸 필요는 없으니 코드가 더 간단해질 수도 있다.

async function add2() {
  const promise = new Promise(function (resolve, reject) {
    let a = 10 + 10;
    resolve(a);
    // reject(5000);
  });

  // try{ 이 부분 코드를 try해보고 } catch{ 안되면 이 코드를 실행 }
  try {
    const result = await promise;
    console.log(result);
  } catch {
    console.log('failed');
  }
}

add2();

// -----------------------------------

const btn = document.querySelector('button');

async function btnClick() {
  const promise = new Promise(function (resolve, reject) {
    btn.addEventListener('click', function () {
      resolve('success');
    });
  });

  try {
    const result = await promise;
    console.log(result);
  } catch {
    console.log('실패');
  }
}

btnClick();
