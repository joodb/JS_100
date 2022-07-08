/* 문제67 : 민규의 악수

광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

이 행사에서 진행된 악수는 총 n번이라고 했을 때,
민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
그리고 민규를 포함한 행사 참가자는 몇 명일까요?

- 악수는 모두 1대 1로 진행이 됩니다.
- 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
- 같은 상대와 중복된 악수는 카운트 하지 않습니다.
- 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니
*/

// 답안
function solution(num) {
  let people = 0;
  let totalHandShake = 0;
  let temp = 0;

  while(true) {
    totalHandShake = parseInt( (people * (people - 1))/2, 10);
    if (num < totalHandShake) {
      break;
    }
    temp = totalHandShake;
    people++;
  }
  return [parseInt(num - temp, 10), people];
}

const inputHandShake = prompt('악수한 수를 입력해주세요.');
console.log(solution(inputHandShake));


/* 문제 접근 방법
1. while문을 순환하는 동안 총 악수한 수는 인원수 * 인원수-1 한 값을 2로 나누고 10진수로 반환한다. (중복 악수를 제거)
2. 이때 총 악수의 수가 입력한 수보다 커진다면 while문을 빠져나온다.
3. 임시 변수에 총 악수를 대입하고 사람수를 +1 한다.
4. 입력한 악수의 수에서 임시변수의 값을 빼 총 악수의 수를 반환한다.
*/