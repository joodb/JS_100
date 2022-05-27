/* 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요
*/

// 내 답안
const inputText = prompt('글자를 입력해주세요.')
const findText = prompt('검색할 글자를 입력해주세요.')

for(let i = 0; i < inputText.length; i++) {
  if(inputText[i] == findText[0]){
    console.log(inputText.indexOf(inputText[i], i)); // 같은 값만 출력이 된다.
  }
}

/* 
for문, if문으로만 풀려고하는 습관이 있는데 이제는 메서드를 먼저 이용하는 방법으로 접근해봐야겠다.
*/

// 정답
const data = prompt('문자열을 입력하세요');
const word = prompt('찾을 단어를 입력하세요');

console.log(data.indexOf(word));
/* indexOf() 메서드는 호출한 스트링 객체나 배열에서 
 * 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
*/