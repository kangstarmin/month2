// 0 이상 1 미만의 실수를 랜덤하게 반환
// console.log(Math.random())

// 1 이상 46 미만의 정수를 랜덤하게 반환해야 로또!
// Math.floor(Math.random() * 46) // 괄호 안의 수에서 소수점 이하를 제거!

const lotto = []

// for(let i = 0; i < 6; i += 1){
//  lotto.push(Math.floor(Math.random() * 45) + 1)
// }

while(lotto.length != 6){
  let randomNumber = Math.floor(Math.random() * 45) + 1 
  if(lotto.indexOf(randomNumber) == -1){
    lotto.push(randomNumber)  
  }
}

console.log(lotto)