const h1 = document.querySelector("h1")

const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const toggleBtn = document.getElementById("toggle");
const itemBtn = document.getElementById("item");
const containsBtn = document.getElementById("contains")
const replaceBtn = document.getElementById("replace")

addBtn.addEventListener("click", function(){
  h1.classList.add("colored")
})

removeBtn.addEventListener("click", function(){
  h1.classList.remove("colored")
})

toggleBtn.addEventListener("click", function(){
  h1.classList.toggle("colored")
})

itemBtn.addEventListener("click", () => {
  
  const a = h1.classList.item(2)
  console.log(a)
})

containsBtn.addEventListener("click", () => {
  console.log(h1.classList.contains("colored"))
})

replaceBtn.addEventListener("click", () => {
  h1.classList.replace("colored", "red")
})