/* 
진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.
 */


// 내 답안
const txt = prompt('알파벳을 입력해주세요.');

if (txt == txt.toUpperCase()) {
  console.log('YES');
} else {
  console.log('NO');
}


// 정답
/* 
const data = prompt('알파벳을 입력하세요.');

if (data === data.toUpperCase()){
  console.log('YES');
} else {
  console.log('NO');
}
 */


// 풀이 
/* 
1. 입력된 글자가 대문자인지 판단하기 위해
toUpperLower()을 이용해 조건문 생성

2. 조건에 맞는 결과들 출력
*/
