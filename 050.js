/* 문제50 : 버블정렬 구현하기

버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
*/

// 답안
function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    // for ( /*빈칸을 채워주세요*/  ) {
    for ( let j = 0; j < result.length - i; j++ ) {
      if (result[j] > result[j + 1]) {
        /*빈칸을 채워주세요*/ 
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));

/* 문제 접근 방법
1.버블 정렬함수에서 이중 for문으로 하나씩 접근한다. 
2. j의 값이 다음 값보다 클 때 변수 temp를 만들어 j의 값을 대입한다. 
3. j에는 j의 다음값이 들어간다. 
4. j의 다음값에는 변수 temp에 담아놨던 처음 j의 값을 대입한다. 
*/