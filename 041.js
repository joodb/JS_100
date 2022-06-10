/*  문제41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

// 답안
const num = prompt('숫자를 입력하세요.');

function checkNum( num ) {
  for (let i = 2; i < num; i++) {
    const result = num % i;

    if (result === 0) {
      console.log('NO');
      return false;
    }
  }

  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

checkNum(num);

/* 문제 접근 방법
1. 수를 입력받는다. 
2. for문을 돌며 입력받은 수 num을 result에 담는다.
3. result가 0이면 NO출력하고 return false로 빠져나간다. 
4. result가 1이라면 NO를 출력
*/