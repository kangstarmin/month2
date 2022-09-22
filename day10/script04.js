
const form = document.getElementById("form")
const readBtn = document.getElementById("read")
const clearBtn = document.getElementById("clear")

form.addEventListener("submit", function(e){
  e.preventDefault()
  const myPet = {
    petName: form.petname.value,
    petRace: form.petrace.value,
    petAge: form.petage.value,
    petChar: form.petcharacter.value
  }
  localStorage.setItem(form.petname.value, JSON.stringify(myPet))
})

readBtn.addEventListener("click", function(){
  const item = localStorage.getItem("꿈돌이")

})
clearBtn.addEventListener("click", function(){
  localStorage.clear()
})