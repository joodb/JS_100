/* 문제65 : 변형된 리스트

a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요
*/

// 답안
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

let result = [];

for(let i = 0; i < a.length; i++) {
  if (i % 2 === 0) {
    result.push([a[i], b[i]])
  } else {
    result.push([b[i], a[i]])
  }
}
console.log(result);

/* 문제 접근 방법
1. for문으로 a배열에 순차적으로 접근한다.
2. 만약 짝수라면 a배열을 먼저, b배열을 뒤에 push한다.
3. 홀수라면 b배열을 먼저, a배열을 뒤에 push한다. 
*/