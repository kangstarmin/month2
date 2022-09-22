const pbtn = document.getElementById("p-btn")
const hbtn = document.getElementById("h-btn")
const dbtn = document.getElementById("d-btn")
const input = document.getElementById("content")
const container = document.getElementById("container")

pbtn.addEventListener("click", function(){
  const newP = document.createElement("p")
  newP.textContent = input.value
  input.value = ""
  container.appendChild(newP)
})
//5분 미션! h1 과 div에 대해서도 p 태그와 같은 동작이 되게 하기!
hbtn.addEventListener("click", function(){
  const newH = document.createElement("h1")
  newH.textContent = input.value
  input.value = ""
  container.appendChild(newH)
})
dbtn.addEventListener("click", function(){
  const newD = document.createElement("div")
  newD.textContent = input.value
  input.value = ""
  container.appendChild(newD)
})