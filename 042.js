/* 문제42 : 2020년

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

// 답안
const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a, b) {
  const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

  const result = new Date(`2020-${a}-${b}`);
  return day[result.getDay()];
}

console.log(solution(month, date));

/* 문제 접근 방법
1. 월과 일을 검색할 두 수를 입력받는다. 
2. 매개 변수 두 개를 받는 함수 solution을 만든다. 
3. 함수 안에 요일이 담긴 배열을 생성한다. 
4. Date를 이용해 입력한 날짜를 변수에 할당한다. 
5. getDay로 나온 날짜의 순서를 day 배열에서 반환한다.
*/