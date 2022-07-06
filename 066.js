/* 문제66 : 블럭탑쌓기

탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.
*/

// 답안
const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
const rule = "ABD";

function checkRule(rule, arr) {
  let temp = -1;

  for (let i = 0; i < rule.length; i++) {
    if (arr.indexOf(rule[i]) !== -1) {
      let index = arr.indexOf(rule[i]);
      if (temp < index) {
        temp = index;
      } else {
        return "불가능";
      }
    }
  }
  return "가능";
}

function pushResult(rule, arr) {
  let result = [];
  for (let i of arr) {
    result.push(checkRule(rule, i));
  }
  return result;
}

console.log(pushResult(rule, top));

/* 문제 접근 방법
1. checkRule 함수에서 for문으로 rule을 접근하는데
2. 존재한다면 index에 넣기 전에 temp값과 index 값을 비교한다.
3. 만약 index의 값이 더 크다면 temp에 대입하고 아니라면 '불가능'을 반환한다.
4. pushResult에서는 result배열에 checkRule에서 나온 결과를 순차적으로 담는다.
*/