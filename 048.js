/* 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
*/

// 답안
const input = prompt('영어를 입력해주세요.').split('')

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    input[i] = input[i].toLowerCase()
  } else {
    input[i] = input[i].toUpperCase()
  }
}

console.log(input);

/* 문제 접근 방법
1. 입력 받은 문자열을 하나씩 저장한다. 
2. 배열의 길이만큼 for문을 돌며 하나의 인덱스마다 접근한다. 
3. 조건문으로 대문자라면 소문자로 바꾸고, 소문자라면 대문자로 바꾼다. 
*/