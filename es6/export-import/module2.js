let aa = 15;
let bb = 30;

// 여러개의 파일을 내보내고 싶을 때는
// export {내보낼 것들}
// export { aa };
// export { bb };
export { aa, bb };

// 혹은 이렇게 변수에 export를 포함하여 한줄로도 작성 가능

export let cc = 45;
export let dd = 60;

// 한개 파일 안에서 export와 export default 동시 사용 가능
let ee = 75;
export default ee;
