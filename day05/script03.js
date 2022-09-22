const button = document.querySelector("button")
const h1 = document.getElementById("text")
let number = 0
h1.textContent = number

// button.onclick = function(){}
button.addEventListener("click", function(event){
  console.log(event)
  number += 1
  h1.textContent = number
})