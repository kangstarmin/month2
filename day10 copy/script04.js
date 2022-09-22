
const readBtn = document.getElementById("read")
const clearBtn = document.getElementById("clear")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const myPet = {
    petName: form.petname.value,
    petRace: form.petrace.value,
    petAge: form.petage.value,
    petChar: form.petcharacter.value
  }
  localStorage.setItem(form.petname.value, JSON.stringify(myPet))
})

readBtn.addEventListener("click", () => {
  console.log(localStorage.getItem("바둑이"))
})

clearBtn.addEventListener("click", () => {
  localStorage.clear()
})
