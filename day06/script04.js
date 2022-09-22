
// const now = new Date()

// 년월일 시분초
// let year = now.getFullYear()
// let month = now.getMonth() + 1
// let date = now.getDate()
// let hour = now.getHours()
// let minute = now.getMinutes()
// let second = now.getSeconds()


// let currentTime = `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분 ${minute}초`


const button = document.getElementById("push")
const div = document.getElementById("log")

button.addEventListener("click", function(){
  const now = new Date()

  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()

  let currentTime = `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분 ${second}초`
  const newP = document.createElement("p")

  newP.textContent = currentTime
  div.appendChild(newP)
})
