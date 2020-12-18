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

// ----------------------------------------------

// 함수의 arguments

function exam1(a, b, c) {
  // ---> 함수의 인자값으로 들어간 것이 parameter
  console.log(a, b, c); // ---> 콘솔 내부의 값으로 들어간 것이 argument
}

function func2(a, b, c) {
  // arguments는 함수의 parameter에 들어간 것을 Array안에 담은 변수
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  // for문을 써서 arguments.length를 통해 파라미터의 갯수에 상관 없이 출력 가능
}

func2(1, 2, 3);

// -----------------------------------------------

// Rest Parameter

// ...rest를 param값으로 넣으면 해당 함수에 들어오는 모든 param들을 Array로 만들어서 rest에 담아준다.
// 주의 점으로는 parameter가 여러개일 경우 가장 뒤게 써야하면 한 번만 사용 가능하다.
function func3(...rest) {
  console.log(rest); // ---> (5) [1, 2, 3, 4, 5]
}
func3(1, 2, 3, 4, 5);

function func4(a, b, ...rest) {
  console.log(a, b); // ---> 1, 2
  console.log(rest); // ---> (7) [3, 4, 5, 6, 7, 8, 9]
}
func4(1, 2, 3, 4, 5, 6, 7, 8, 9);
