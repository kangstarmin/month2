const container = document.getElementById("container")

// 요소 생성후 저장하기
const p1 = document.createElement("p")
const p2 = document.createElement("p")
const span = document.createElement("span")
span.textContent = "나는 두 번째 만들어진 아이의 자식 요소"
p2.appendChild(span)
p1.textContent = "나는 첫 번째 만들어진 아이"
// p2.textContent = "나는 두 번째 만들어진 아이"

// 생성한 요소를 특정 위치에 추가하기
document.body.appendChild(p1)
// container.appendChild(p2)
// container.append("나를 추가해줘서 고마워")