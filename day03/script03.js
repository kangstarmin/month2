// document : 현재 화면에 펼쳐진 문서
// 메소드의 괄호 안에 전달되는 데이터를 '인자(argument)'라고 한다.
// let title = document.querySelector("h1")
// console.log(title)

// let paragraph = document.querySelector("p")
// console.log(paragraph)

// let idTitle = document.getElementById("title")
// let idP1 = document.getElementById("snack")
// let idP2 = document.getElementById("issue")
// console.log(idTitle)
// console.log(idP1)
// console.log(idP2)

// 객체의 속성 : 객체가 가지고 있는 변수
const title = document.querySelector("h1")
console.log(title)
console.log(title.textContent) // 써져 있는 내용만 나온다.

// 쓰여 있는 내용 변경하기
title.textContent = "마레정원"

let idP1 = document.getElementById("snack")
let idp2 = document.getElementById("issue")

idP1.textContent = "마레정원은 롯데백화점 뒤에 위치한 음식점이다."
idp2.textContent = "언제 생겼는지 잘 모르지만, 분위기도 괜찮고, 불낙전골이 꽤 맛있었다."
