/* 문제52 : quick sort

다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
*/

// 답안
function quickSort(arr){
  if (arr.length <= 1){ // 길이가 하나라면 그대로 반환한다.
    return arr;
  }

  const pivot = arr[0]; // 첫 번째 값을 피벗으로 한다.
  // 마지막값을 피벗으로 하고싶다면? arr[arr.length-1]
  const left = [];
  const right = [];

  for (let i=1; i<arr.length; i++){ // 피벗으로 0 을 쓰고있기때문에 1부터 시작한다.
    //if(/*빈칸을 채워주세요*/){
    if(arr[i] < pivot){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // return /*빈칸을 채워주세요*/
  return quickSort(left).concat(pivot, quickSort(right))
  
  // quickSort(left) + pivot + quickSort(right)
  // 배열이 아닌 단순히 이어붙인형태를 concat을 이용해 배열로 만들어준다. 
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));

/* 문제 접근 방법\

quick sort 
- 피벗을 하나만 사용한다. 

concat() 
- 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합
- 기존배열을 변경하지 않습니다. 
- 추가된 새로운 배열을 반환합니다.
*/