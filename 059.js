/* 문제59 : 빈칸채우기

총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
*/

// 답안
const str = prompt('문자열을 입력해주세요.');

const n = 25 + parseInt((str.length/2), 10);
const left = str.padStart(n, '='); 

console.log(left.padEnd(50, '='));

/* 문제 접근 방법
1. 문자열을 입력받는다. 
2. 중앙정렬을 위해 일단 50의 절반인 25부터 문자열의 반부터 시작한다. 
3. padStart()로 왼쪽부터 n개 만큼 '='로 채운다. 
4. padEnd()로 왼쪽부터 50번째까지 '='로 체운다.

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
*/