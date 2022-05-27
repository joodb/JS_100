/* # 문제33 : 거꾸로 출력하기

한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
*/

// 제출 답안
const nums = prompt('숫자들을 입력해주세요.').split(' ').reverse();
let result = '';

for (let i = 0; i < nums.length; i++) {
  result += nums[i] + ' ';
}
console.log(result);

/* 정답
const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);
*/

// 풀이
/* 
1. 배열 메서드 reverse()를 이용해 입력 받을 때부터 역순으로 저장되게 한다. 
2. 출력할 순서대로 for문을 이용해 result에 값을 넣는다. 

정답에서는 result를 const로 해두어서 에러가 발생했다. 둘의 차이는 let은 변수에 재할당이 가능하지만, const는 변수 재선언, 재할당 모두 불가능하다는 것이다. 
let으로 바꾸어야 해결가능한데 for문을 돌 때마다 nums[i]의 값이 재할당 되기때문이다. 
*/