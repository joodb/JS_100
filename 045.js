/* 문제45 : getTime()함수 사용하기

Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 현재 연도(2019)를 출력해보세요.
*/

// 답안
const day = new Date();
let year = day.getTime();

year = Math.floor( year/(1000*60*60*24*365) + 1970 )

console.log(year);

/* 문제 접근 방법
1. date와 getTime을 변수에 담는다.
2. 밀리세컨즈를 초로 바꾸기 위해 1000을 곱하고 초, 분, 일을 곱해주고 시작일인 1970을 더한다.
*/