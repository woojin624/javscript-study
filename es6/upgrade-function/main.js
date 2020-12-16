// default parameter

// 해당 파라미터에 값이 없을 경우 함수가 제대로 실행되지 않으므로 default값을 정해준다.
function add1(a = 2, b = 10) {
  console.log(a + b);
}

add1(); // add1(2, 10) ---> 12
add1(1, 2); // ---> 3

// default 값으로 연산자도 사용가능
function add2(a = 2, b = 5 + a) {
  console.log(a + b);
}

add2(); // add2(2, 7) ---> 9
add2(3, 10); // ---> 13

// default 값으로 함수도 사용가능
function func1() {
  return 3;
}

function add3(a = 3, b = func1()) {
  console.log(a + b);
}

add3(); // ---> add3(3, 3) ---> 6
add3(5); // ---> add3(5, 3) ---> 8
