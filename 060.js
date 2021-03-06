/* 문제60 : 번호 매기기

새 학기가 되어 **이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다**.
데이터에 입력된 이름을 아래와 같이 출력해 주세요.

데이터
students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']


출력
번호: 1, 이름: 강은지
번호: 2, 이름: 강채연
번호: 3, 이름: 권윤일
번호: 4, 이름: 김민호
번호: 5, 이름: 김유정
번호: 6, 이름: 김진이
번호: 7, 이름: 김채리
번호: 8, 이름: 박지호
번호: 9, 이름: 박현서
번호: 10, 이름: 최성훈
번호: 11, 이름: 한지호
번호: 12, 이름: 홍유진
*/

// 답안
const students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];

students.sort();

for (let key in students){
  console.log(`번호: ${parseInt(key, 10)+1}, 이름: ${students[key]}`);
}

/* 문제 접근 방법
1. students 객체안 있는 값을 먼저 sort()로 정렬해준다.
2. for in 문으로 students안에 있는 값들에 순차적으로 접근한다.
3. 번호는 각 키의 인덱스에 +1을 하여 1부터 출력되게 한다.
4. 이름은 그 key의 값을 출력한다. 

*/