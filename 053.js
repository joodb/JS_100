/* 문제53 : 괄호 문자열

괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자. 

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**
*/

// 답안
function mathBrackets(e) {
  let count = 0; // 괄호의 개수를 확인할 변수 (홀수라면 false 반환)

  // 괄호 개수가 다르다면 false
  for (let i=0; i < e.length; i++) {
    if (e[i] === '(' || e[i] === '[' || e[i] === '{'){
      count++;
    }
    if(e[i] === ')' || e[i] === ']' || e[i] === '}'){
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }

  let bracket = [];
  for ( let i in e) {
    if (e[i] === '(' || e[i] === '[' || e[i] === '{'){
      if ( e[i] === '(') { bracket.push('(') }
      else if ( e[i] === '[') { bracket.push('[') }
      else if ( e[i] === '{') { bracket.push('{') }

    }
    
    if (e[i] === ')' || e[i] === ']' || e[i] === '}') {
      if (bracket.length === 0) {
        return false;
      }
      bracket.pop();
    }
  }
  return true;
}

const input = prompt("괄호를 입력해주세요").split('')

if (mathBrackets(input) === true) {
  console.log('YES');
} else {
  console.log('NO');
}


/* 문제 접근 방법
1. 입력받은 첫 번째 괄호가 여는 괄호가 맞는지 확인해 count 변수에 +를 해준다. 닫는 괄호는 -
2. count가 0이라면 false를 반환한다. 
3. for문에서 if문으로 i번째 인덱스가 여는 괄호라면 push, 닫는 괄호라면 pop
4. 닫는괄호일 때 만약 비어있는 상태라면 잘못된 상태이기에 false 

*/