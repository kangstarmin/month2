// DOM을 이용하면 텍스트 뿐 아니라, 스타일도 바꿀 수 있다.
const div = document.getElementById("current")
div.textContent = "요소에 글쓰기"
div.style.width = "200px"
div.style.height = "200px"

// CSS의 -는 산술연산자이므로 쓸 수 없다. 따라서 대문자로 대체한다.
// div.style.backgroundColor = "red"

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const h1 = document.getElementById("current")

// 이벤트 핸들러 등록
// 익명 함수를 곧바로 등록하는 방식
btn1.onclick = function(){
  h1.style.backgroundColor = "skyblue"
}
btn2.onclick = function(){
  h1.style.backgroundColor = "black"
}
btn3.onclick = function(){
  h1.style.backgroundColor = "gray"
}