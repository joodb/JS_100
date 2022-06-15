/* 문제44 : 각 자리수의 합

사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

*/

// 답안
const input = prompt('숫자를 입력해주세요').split('');

const result = input.map((num) => parseInt(num, 10)).reduce((acc, cur) => acc + cur);

console.log(result);

/* 문제 접근 방법
1. 입력받은 문자를 하나씩 배열에 넣는다. 
2. map으로 입력받은 문자를 10진수 정수형으로 반환한다. 
3. reduce로 배열의 각 숫자들을 합한다. 
*/