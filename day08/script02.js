// 배열 : 여러 요소를 모아서 하나로!
const myNumber = new Array(2, 12, 11, 43, 33, 29)
const lotto = document.getElementById("lotto") // div

// 배열 요소 하나씩 접근해서 웹화면에다 차례대로 표시하기

const showBtn = document.getElementById("show")

showBtn.addEventListener("click",function(){

  if(lotto.classList.contains("done")){
    return // 함수 강제 종료 
  }
  else{
    lotto.classList.add("done")
  }
  for(let i = 0; i < myNumber.length; i += 1){
    const p = document.createElement("p")
    p.textContent = myNumber[i]
    lotto.appendChild(p)
  }
})
