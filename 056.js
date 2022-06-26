/* 문제56 : 객체의 함수 응용

다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023

*/

// 답안
const nationWidth = {
  'korea': 220877,
  'Rusia': 17098242,
  'China': 9596961,
  'France': 543965,
  'Japan': 377915,
  'England' : 242900,
}

const k_width = nationWidth['korea'];
delete nationWidth['korea'];

let key = Object.keys(nationWidth);
let value = Object.values(nationWidth);


for(let i in key){
nationWidth[key[i]] = Math.abs( value[i]-k_width );
}

const min = Math.min( ...Object.values(nationWidth) );

let result = key.find( x => nationWidth[x] == min );

console.log(`${result}  ${min}`);


/* 문제 접근 방법
1. korea의 값을 k_width에 대입하고 기존 객체에서 delete한다.
2. key, value 변수를 만들어 각 key와 value값을 대인한다. 
3. nationWidth 객체에 접근하여 해당 value값과 korea의 value값의 차를 절대값으로 구한다. 
4. nationWidth에서 가장 작은 값을 min에 대입한다.
5. key에서 가장 작은 값을 찾는다. 

Object.keys() : 주어진 객체의 속성 이름들에 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
Object.values() : 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 반환
*/