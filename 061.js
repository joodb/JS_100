/* 문제61 : 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
*/

// 답안
const text = new String(prompt('문자를 입력해주세요'));
let result_s = '';
let store_s = text[0];
let count = 0;

for(let i of text) {
  if (i === store_s) {
    count++;
  } else {
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
/* 문제 접근 방법
1. 문자열을 입력받을 변수, count한 결과를 담을 변수, 비교할 기준인 문자열의 변수, 개수를 담을 변수 총 4개를 만든다
2. for of문으로 text 배열에 접근하며 if문으로 store_s의 값과 동일한 값이 있다면 count의 값을 증가시킨다.
3. 같지 않다면 결과를 담을 변수에 해당 문자열과 count한 값을 담는다. store_s는 i번째 인덱스의 값이 되도록 바꾸고 count도 1로 초기화한다.
4. 모든 결과를 result_s에 담고 출력한다.
*/