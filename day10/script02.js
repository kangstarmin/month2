/*
const todoList = [
  {
    todoText: "밥먹기",
    isDone: false
  }, 
  {
    todoText: "학원가기",
    isDone: true
  }
]

const todoList2 = [...todoList,
  {
    todoText: "잠자기",
    isDone: false
  }
]
console.log(todoList2)
*/

const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")

//할 일 목록을 관리한다
let todoArr = []

button.addEventListener("click", function(){
  const todo = {
    todoText: input.value,
    isDone: false
  }
  todoArr = [...todoArr, todo]

  ul.innerHTML = "" // ul 태그 안의 모든 태그를 지운다.

  todoArr.forEach(function(value){
    const li = document.createElement("li")
    li.textContent = value.todoText
    ul.appendChild(li)
  })
})
