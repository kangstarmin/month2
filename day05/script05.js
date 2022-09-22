
const form = document.getElementById("form")
const p = document.getElementById("result")
form.addEventListener("submit", function(e){
  e.preventDefault() // 원래 기능을 안 쓴다.

  // console.log(e.target) // 이벤트가 발생한 대상

  // 자바스크립트에서는 name 속성의 값에 다이렉트로 접근이 가능하다.
  let username = e.target.name.value
  let usernick = e.target.nick.value
  let resultText = `${username}은(는) ${usernick}`
  p.textContent = resultText
})
