// Array를 쓰다보면 항상 사용하던 map이나 splice 만 쓸 뿐 some, every 메소드에 대해선 항상 헷갈려 하던 부분이라 공부도 할 겸 Array method를 정리하려한다.

// 해당 리스트 파일에서는 간략한 정의만 정리하고 예제 같은 것은 파일을 따로 만들어서 할 예정이다.

const a = [1, 2, 3, 4, 5, 6];

// push()
// 배열 뒷부분에 값을 삽입
{
  const arr = [...a];
  arr.push(7);
  console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]
}

// pop()
// 배열 뒷부분의 값을 삭제
{
  const arr = [...a];
  arr.pop();
  console.log(arr); // [ 1, 2, 3, 4, 5 ]
  // 마지막 숫자를 반환해야하는 경우 아래처럼 작성
  const num = [...arr].pop();
  console.log(num); // 6
}

// unshift()
// 배열 앞부분에 값을 삽입
{
  const arr = [...a];
  arr.unshift(0);
  console.log(arr);
}

// shift()
// 배열 앞부분에 값을 삭제
{
  const arr = [...a];
  arr.shift();
  console.log(arr);
}

// splice()
// 배열의 특정위치에 요소를 추가하거나 삭제
// splice(start: number, deleteCount?: number)
{
  const arr = [...a];
  arr.splice(3, 2); // 3번 인덱스로부터 2개 요소 삭제
  console.log(arr); // [1, 2, 3, 6]

  const arr2 = [...a];
  arr2.splice(1, 3, 101, 102); // 1번 인덱스로부터 3개 요소 삭제 후 101, 102 요소를 그 위치에 삽입
  console.log(arr2); // [1, 101, 102, 5, 6]
}

// slice()
// 배열의 startIndex부터 endIndex직전까지 새로운 배열을 반환, 기존의 배열은 건드리지 않는다.
// slice(start?: number, end?: number)
{
  const arr = [...a];
  const result = arr.slice(2, 5); // 2번 인덱스부터 5번인덱스 전까지 새로운 배열 생성
  console.log(arr); // [1, 2, 3, 4, 5, 6]
  console.log('sliced arr', result); // [3, 4, 5]
}

// concat()
// 복수의 배열을 병합하여 배열을 반환, 기존의 배열은 건드리지 않는다.
// concat(...items: ConcatArray<number>[]): number[] (+1 overload)
{
  const arr = [...a];
  const arr2 = ['a', 'b', 'c', 'd'];
  const result = arr.concat(arr2);
  console.log(arr);
  console.log(result); // [1, 2, 3, 4, 5, 6, "a", "b", "c", "d"]
}

// find()
// Array안에서 첫번째로 찾아진 요소를 반환, predicate가 true일 때 반환하며 true를 찾지 못하면 undefined를 반환
{
  const cars = [
    { name: 'kia', price: 2000 },
    { name: 'volvo', price: 5000 },
    { name: 'audi', price: 7000 },
  ];
  const result = cars.find((v) => v.price === 5000);
  console.log(result); // {name: "volvo", price: 5000}
  // 이 메서드는 객체들로 요소가 이루어진 배열을 다룰 때 유용하다.
}

// findIndex()
// 매개 변수로 지정된 콜백 함수에서 요구하는 원소를 찾기 위해 배열 안의 원소를 순서대로 탐색하면서 최초 찾은 배열의 원소에 대한 인덱스 반환한다. 존재하지 않으면 -1을 반환한다.
{
  const cars = [
    { name: 'kia', price: 2000 },
    { name: 'volvo', price: 5000 },
    { name: 'audi', price: 7000 },
  ];
  const result = cars.findIndex((v) => v.price === 5000);
  console.log(result); // 1
  const result2 = cars.findIndex((v) => v.price === 10000);
  console.log(result2); // -1
  const result3 = cars.findIndex((v) => v.name === 'audi');
  console.log(result3); // 2
  // 이 메서드는 객체들로 요소가 이루어진 배열을 다룰 때 유용하다.
}

// some()
// 배열의 요소 중에 콜백함수의 리턴이 true인지 아닌지 확인해준다. -> 배열에서 하나라도 콜백함수의 조건에 맞다면 true를 반환
// some(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean
{
  const arr = [...a];
  console.log(arr.some((v) => v === 3)); // arr배열의 요소 중에 3이 있으므로 true를 리턴
}

// every()
// 배열의 요소 전부가 콜백함수의 리턴이 true인지 아닌지 확인해준다. -> 배열에서 모든 요소가 콜백함수의 조건에 맞다면 true를 반환, 하나라도 조건에 맞지 않다면 false를 반환한다.
// every(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean (+1 overload)
{
  const arr = [...a];
  console.log(arr.every((v) => v === 5)); // arr배열에서 여러개의 요소 중 5는 한개 밖에 없기 때문에 false를 리턴
  console.log(arr.every((v) => typeof v === 'number')); // arr배열의 모든 요소는 number타입이기 때문에 true를 리턴
}

// forEach()
// 배열의 각 요소들에 콜백함수를 실행
// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
{
  const arr = [...a];
  let sum = 0;
  arr.forEach((v) => (sum += v)); // sum 변수에 arr 배열의 요소를 전부 더해준다.
  console.log(sum); // 21
}

// map()
// 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환한다.
// Array안에 들어있는 요소 한가지씩 다른 것으로 변환해준다. -> 지정된 콜백함수를 호출하면서 각각의 요소들을 함수를 거쳐 새로운 값으로 변환.
// map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any)
{
  const arr = [...a];
  const result = arr.map((v) => v * 10); // 배열의 각 요소에 10을 곱한 새로운 배열을 반환
  console.log(result); // [10, 20, 30, 40, 50, 60]
}

// filter()
// 지정된 함수의 결과 값을 true로 만드는 요소들로 구성된 새로운 배열을 반환한다.
// 콜백함수를 전달해서 콜백함수가 true 요소들로 새로운 배열을 반환해준다.
// filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any)
{
  const arr = [...a];
  const result = arr.filter((v) => v % 2 === 0); // arr배열의 요소 중 2로 나누어 나머지가 0인 요소들로 새로운 배열 생성
  console.log(result); // [2, 4, 6]
}

// reduce()
// 콜백함수와 초기값을 전달하여 콜백함수로 리턴된 값이 누적되어 반환된다. (값을 모아 놓을 떄)
// reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number (+2 overloads)
{
  const arr = [...a];
  const result = arr.reduce((acc, val) => acc + val * val, 0); // 0으로 받아온 초기값이 acc로 들어가고 콜백함수가 실행된 뒤 결과값을 0의 위치에 놓는다.
  console.log(result); // 91
}

// reverse()
// 배열의 순서를 뒤집는다.
{
  const arr = [...a];
  arr.reverse();
  console.log(arr); // [6, 5, 4, 3, 2, 1]
}

// sort()
// 배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬한다. 모든 원소를 문자열로 취급해 사전적으로 정렬
// sort(compareFn?: (a: number, b: number) => number)
{
  const arr = [7, 2, 6, 3, 5, 8, 1];
  arr.sort();
  console.log(arr); // [1, 2, 3, 5, 6, 7, 8]
}

// toString()
// 배열을 문자열로 바꾸어 반환한다.
{
  const arr = [...a];
  console.log(arr.toString()); // 1,2,3,4,5,6
}

// join()
// 배열의 요소 값 사이에 seperator를 붙여 문자열로 반환
// join(separator?: string): string
{
  const arr = [...a];
  console.log(arr.join()); // 1,2,3,4,5,6
  console.log(arr.join('...')); // 1...2...3...4...5...6
  console.log(arr.join(' >-< ')); // 1 >-< 2 >-< 3 >-< 4 >-< 5 >-< 6
}

// split()
// 문자열을 배열로 반환
{
  const string = '1234567';
  console.log(string.split()); // ["1234567"]
  console.log(string.split('')); // ["1", "2", "3", "4", "5", "6", "7"]
  console.log(string.split('').map((v) => +v)); // [1, 2, 3, 4, 5, 6, 7]
}

// fill()
// 배열의 모든 요소를 입력된 파라미터로 채움
{
  const arr = [...a];
  const result = arr.fill('a');
  console.log(result); // ["a", "a", "a", "a", "a", "a"]
  const result2 = arr.fill(1);
  console.log(result2); // [1, 1, 1, 1, 1, 1]
}

// keys()
// 배열의 각 인덱스를 키(Key) 값으로 가지는 새로운 Array Iterator 객체를 반환한다.
{
  const arr = ['apple', 'banana', 'grape', 'strawberry'];
  const iterator = arr.keys();
  for (let key of iterator) {
    console.log(key);
    // 0
    // 1
    // 2
    // 3
  }
}

// from()
// 유사 배열 객체나 반복 가능한 객체를 얕게 복사하여 새로운 배열객체를 만든다.
// from(arrayLike[, mapFn[, thisArg]])
{
  console.log(Array.from('foo')); // ['f', 'o', 'o']
  console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]
  console.log(Array.from({ length: 5 }, (v, i) => i)); // [0, 1, 2, 3, 4]
}

// 배열의 인덱스 검색
{
  const arr = [...a];

  // indexOf()
  // 밸류값을 입력하여 해당 밸류의 인덱스 값 반환
  console.log(arr.indexOf(3)); // 2
  console.log(arr.indexOf(1222)); // -1 배열 안에 없는 값을 입력하면 -1 반환

  // lastIndexOf()
  // 배열 안에 중복된 밸류가 있다면 가장 마지막에 있는 인덱스를 반환
  console.log(arr.lastIndexOf(2)); // 1

  // includes()
  // 밸류값을 입력하여 해당 밸류가 배열안에 있다면 true 없다면 false 반환
  console.log(arr.includes(111)); // false
  console.log(arr.includes(3)); // true
}
