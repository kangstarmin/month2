// 객체 리터럴 : 객체를 만드는 문법
// 객체 : 데이터와 기능을 가진다. (== 변수와 함수를)
/*
const cat = {
  myName: "국회",
  myColor: "회색",
  myAction: function(){
    console.log("우다다 달립니다")
  }
}
console.log(cat.myName)
cat.myAction()
*/

const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")

button.addEventListener("click", function(){
  const todoItem = document.createElement("li")

  const todo = {
    todoText: input.value,
    priority: Math.floor(Math.random() * 3) + 1
  }
  todoItem.textContent = `할일: ${todo.todoText}, 우선순위: ${todo.priority}`
  input.value = ""
  ul.appendChild(todoItem)
})
