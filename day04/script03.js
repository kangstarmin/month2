// 변수는 데이터를 기억한 이름표다.
// 함수는 코드를 기억한 주머니다.

// 선언식은 호이스팅 가능하나, 표현식은 불가능
swLee()
swLee()
// hmSon() --> 불가능

// 함수 선언식(함수의 이름은 내맘대로)
// 함수는 만들기만 하면 아무 일도 안 일어난다.

function swLee(){
  console.log("춤바람 일으킨 이승우")
  console.log("이달의 선수 꿰찰까")
  console.log("4월 후보로 지목")
}

// 함수 표현식
const hmSon = function(){
  console.log("월드 클래스 손흥민")
  console.log("손흥민이 골을 넣으면")
  console.log("월드컵 16강 가능할까?")
} // 이름이 붙기 전의 '익명함수' 상태

// 호이스팅 : 만드는 부분보다 호출하는 부분이 먼저 올 수 있는 것

let a = function d(){
  console.log("ㅁㄴㅇ")
}
