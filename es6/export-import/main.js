// export - import로 파일 모듈화

// 기존 다른 스크립트를 가져올 때는 html파일에서
// <script src="./library.js"></script> 이런식으로 가져왔었는데
// es6에서는 좀 더 직관적인 방법으로 가져올 수 있다.

// ---------------------------------

// 1. html파일에서 최상단 script부분에 type="module"을 작성해준다.
// <script src="./main.js" type="module"></script>
// 2. GoLive 같은 서버를 이용해야한다.

// library.js에서 default로 내보내진 모듈을 가져온다. import할 때 변수 이름은 작명 가능
// 아래 방법은 default로 한개만 내보내졌을 때 사용
import aaaa from './module.js';
console.log(aaaa);

// -----------------------------------

// 여러개를 내보내는 export를 가져올 때는 import { 가져올것들 } from '경로'
// 변수 이름은 export된 파일과 똑같이 가져와야한다.

// import { aa, bb, cc, dd } from './module2.js';
// import eeeeeeeeeee from './module2.js';

// module2에서 export와 export default로 내보내진 파일을 한번에 가져오려면
// import eeeeeeeeeee, { aa as abcdef, bb, cc, dd } from './module2.js';
// as 키워드를 통해 변수 이름을 변경 가능
// * 기호로 export된 모든 변수를 가져올 수 있다.
import eeeeeeeeeee, * as modules from './module2.js';

// console.log(abcdef, bb, cc, dd);
console.log(modules);
console.log(modules.aa, modules.bb, modules.cc, modules.dd);
console.log('export default로 가져온 ', eeeeeeeeeee);

// 이러한 import export방식은 IE에서는 안되긴 때문에 리액트 앵귤러가 아닌 일반적인 프론트엔드 개발에선 <script src="">를 써야한다.
