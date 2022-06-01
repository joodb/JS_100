/* 문제36 : 구구단 출력하기
1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

*/

// 제출 답안
const inputNum = prompt('원하는 구구단의 숫자를 입력해주세요.');
let result = '';
for(let i = 1; i < 10; i++) {
  result += inputNum * i + ' ';
}

console.log(result);

/* 풀이 
숫자룰 입력받고 for문으로 1부터 9까지 돌면서 값을 result 변수에 저장한다. 
*/


/* 정답
const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i=1; i<=9; i++){
  result += i*num + ' ';
}

console.log(result);
*/
