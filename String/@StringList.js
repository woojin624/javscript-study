// String을 효율적으로 사용할 메소드를 정리하고자 한다.

// charAt()
// 문자열에서 인자로 넘긴 index에 해당하는 문자형 데이터를 반환해주는 함수
{
  const a = 'JavaScript';
  const result = a.charAt(3); // a문자열의 3번 인덱스를 반환
  console.log(result); // 'a'
}

// charCodeAt()
// 인덱스에 해당하는 문자의 유니코드 값을 반환
{
  const a = 'JavaScript';
  const result = a.charCodeAt(3);
  console.log(result); // 97
}

// indexOf() / lastIndexOf()
// IndexOf("찾을문자")는 문자열의 왼쪽부터 시작하여 찾을 문자와 일치하는 최초의 문자의 Index를 반환하는 함수
// lastIndexOf() 함수의 경우는 IndexOf()와 비슷한 기능을 제공하지만, 차이점은 찾을 문자를 문자열 오른쪽에서부터 찾는다는 점
{
  const a = 'apple watch on the table with apple pencil';
  console.log(a.indexOf('apple')); // 0
  console.log(a.lastIndexOf('apple')); // 30
  console.log(a.indexOf('on')); // 12
}

// replace()
// 문자열의 왼쪽에서부터 찾을 문자를 찾아 최초에 일치하는 문자에 대하여 두 번째 인자로 넘긴 치환할 문자로 대체
{
  const a = 'my iphone';
  const result = a.replace('iphone', 'galaxy'); // 'iphone'이라는 문자를 'galaxy'로 대체
  console.log(result); // my galaxy
}

// substring() / substr()
// substring() 함수는 첫 번째 인자로 전달된 startIndex부터 시작하여 두 번째 인자로 전달된 endIndex앞까지의 문자열을 반환해주는 함수
// substr() 함수는 첫 번째 인자로 넘겨준 startIndex부터 시작하여 두 번째 인자로 넘겨준 *문자개수*만큼 문자열을 잘라 반환해주는 함수입니다.
{
  const a = 'developer for developers';
  const result1 = a.substring(0, 9); // 0번 인덱스부터 시작하여 9번 인덱스의 전까지의 문자열을 반환
  const result2 = a.substr(14, 10); // 14번 인덱스부터 시작하여 10개의 문자를 반환

  console.log('substring(0, 9) : ', result1); // developer
  console.log('substr(14, 10) : ', result2); // developers
}

// slice()
// 배열과 마찬가지 문자열에서도 가능. startIndex부터 end인덱스 직전까지의 새로운 문자열을 반환
// substring과 동일하지만, 음수의 인수를 전달 가능하다. 음수로 전달된 인덱스는 문자열의 뒤에서부터 시작한다
{
  const a = 'abcdefghijk';
  console.log(a.slice(2, 6)); // cdef
  console.log(a.slice(2)); // cdefghijk     endIndex를 입력 안하면 끝까지 간다
  console.log(a.slice(-4, -2));
}

// split()
// 첫 번째 인자로 넘긴 문자를 기준으로 하여 문자열을 잘라 각 배열 요소에 담은 뒤에 해당 배열 객체를 반환
{
  const a = 'AQWSCKNKLA';
  const b = 'a--w--g--ss--fga--sqr--bfjte';
  const c = '감자, 사과, 토마토, 배추, 무';
  console.log(a.split('')); // ["A", "Q", "W", "S", "C", "K", "N", "K", "L", "A"]
  console.log(b.split('--')); // ["a", "w", "g", "ss", "fga", "sqr", "bfjte"]
  console.log(c.split(', ')); // ["감자", "사과", "토마토", "배추", "무"]
}

// toLowerCase() / toUpperCase()
// toLowerCase() 함수는 문자열 안에 대문자를 모두 소문자로 변환
// toUpperCase() 함수는 문자열 안에 소문자를 모두 대문자로 변환
{
  const a = 'BaNana toMaTo ApPlE';
  console.log(a.toLowerCase()); // banana tomato apple
  console.log(a.toUpperCase()); // BANANA TOMATO APPLE
}

// concat()
// 배열과 마찬가지로 문자열에서 사용하면 인자로 받아온 문자열을 뒤에 합친다.
{
  const a = 'net';
  const b = 'flix';
  const result = a.concat(b);
  console.log(result); // netflix
}

// trim()
// 문자열 양쪽 끝 공백을 제거
{
  const a = ' swwwd';
  console.log(a.trim()); // 'swwwd'
  const b = ' awwqq     ';
  console.log(b.trim()); // 'awwqq'
}
