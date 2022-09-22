const myNumber = new Array(2, 12, 11, 43, 33, 29)
const lotto = document.getElementById("lotto") // div
const showBtn = document.getElementById("show")

// const animal = ["강아지", "고양이", "앵무새"]
// animal.splice(0, 2) : 0번 인덱스부터 2개 지운다.
// animal.splice(1) : 1번 인덱스부터 뒤를 다 지운다.
// animal.splice(1, 2, "원숭이", "호랑이") : 1번 인덱스부터 2개 지우고, 지운 자리에 원숭이, 호랑이를 추가한다.

const colors = ["skyblue", "silver", "purple", "yellow", "black", "pink"]

// forEach 콜백함수에는 실행시마다 인자가 전달된다.
myNumber.forEach(function(value, index){
  const p = document.createElement("p")
  p.textContent = value
  p.style.color = colors[index]
  lotto.appendChild(p)
})

