

// DOM(문서 객체 모델) : 렌더링된 웹콘텐츠에 접근할 수 있는 접점
// 함수란 기능을 담고 있는 주머니다.
// 매개변수는 함수 호출 시 재료를 전달받는 임지 저장 공간이다.

let result = confirm("h1 요소에 텍스트를 새로 쓸까요?")

if(result == true){
  changeText("집에 가서 자고 싶다.")
}else{
  changeText("")
}

function changeText(param){
  const h1 = document.querySelector("h1")
  h1.textContent = param
}