// let number = 1

// number가 3보다 작은 동안에 반복한다.
// while(number < 3){
//  console.log(number)
//  number += 1
// }

// while문으로 구현하는 몬스터 잡기 게임

let monster = 100

console.log("몬스터 잡기 시작! 에너지 100 남음.")

while(monster > 0){

  // 데미지를 정한다.
  let damage = prompt("얼마의 데미지를 줄까요?")
  
  // 프롬프트에 작성한 것은 문자열로 처리되므로, 숫자로 변환해야 한다.
  damage = parseInt(damage)

  monster -= damage; // 때릴 때마다 16씩 줄어든다.
  console.log("몬스터를 때렸습니다.")
  if(monster < 0){ // 만약 음수가 나오면 0으로 강제 변환한다.
    monster = 0
  }
  console.log(`몬스터의 에너지가 ${monster} 남았습니다.`)
}