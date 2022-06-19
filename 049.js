/* 문제49 : 최댓값 구하기

순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
*/

// 답안
const inputNum = prompt('숫자를 입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});
const maxNum = Math.max(...inputNum);

console.log(maxNum);

/* 문제 접근 방법
1. 입력받은 문자를 숫자로 변환한다. 
2. 최대값을 구하는 Math.max()메서드를 이용한다.
3. 이때 전개구문을 사용해 요소들만 비교할 수 있게한다. 
*/