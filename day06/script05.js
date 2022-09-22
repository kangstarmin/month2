
// function after5sec(){
//   console.log("5초 지났다~!!")
// }

let count = 1
let intervalId
const h2 = document.getElementById("count")
const goBtn = document.getElementById("go")
const stopBtn = document.getElementById("stop")

function EverySeconds(){
  h2.textContent = count
  count += 1
}

goBtn.addEventListener("click", function(){
  intervalId = setInterval(EverySeconds, 1000)
})

stopBtn.addEventListener("click", function(){
  clearInterval(intervalId)
})

// setTimeout(after5sec, 5000)
// 반환값의 의미 : 등록된 인터벌 동작의 식별값
// const number = setInterval(EverySeconds, 1000)

// 해당 숫자를 식별값으로 하는 인터벌 동작을 제거한다.
// clearInterval(number)