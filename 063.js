/* 문제63 : 친해지고 싶어

한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.

교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
*/

// 답안
const text = prompt('글자를 입력해주세요.').split(' ');
let short = '';

for( let i in text) {
  short += text[i][0];
}

console.log(short);

/* 다른 방법
const user_input = prompt('문자열을 입력하세요').split(' ');
let result = '';

for (let s of user_input){
  result += s.slice(0, 1);
}

console.log(result);
 */


/* 문제 접근 방법
1. 입력 받을 문자열 배열을 띄어쓰기 공백을 기준으로 구분해서 할당한다.
2. 줄임말을 담을 변수를 만든다.
3. for in 문으로 text 배열에 접근하며 각 인덱스의 값을 2차원 배열로 앞글자의 값을 short에 넣는다.

정답 풀이
slice() 메서드를 이용해 각 값의 0번째의 값을 result에 담는다.
*/