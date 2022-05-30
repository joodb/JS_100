/* 문제35 : Factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

<pass>에 코드를 작성하여 two함수를 완성하세요.
*/

// 제출 답안
function one(n){
  function two(num){
      //pass
      return Math.pow(num, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

/* 풀이
제곱을 할 수 있는 메서드인 Math.pow()를 이용해 
변수를 따로 만들지 않고 바로 값을 return 시켰다.

*/

/* 정답
function one(n) {
  function two(value) {
    const sq = Math.pow(value, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
*/
