/* 
2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
 */

const input = prompt('글자를 입력해주세요.');

for(let i = 0; i < input.length -1 ; i++){
  console.log(input[i], input[i+1]);
}

// 풀이
/* 
1. for문으로 입력된값을 순서대로 접근
2. 출력되는 글자와 그 뒤의 글자가 출력되도록 i+1을 한 값을 출력 */

// 정답
// const data = prompt('문자를 입력하세요.');

// for (let i=0; i<data.length-1; i++){
//   console.log(data[i], data[i+1]);
// }
