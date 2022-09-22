
// let age = prompt("나이가 어떻게 되십니까?")

// "7" -> 7
// age = parseInt(age)

// 값을 반환하는 목적으로 쓴다.
// let result = age >= 20 ? "True" : "False"
// alert(result)

let grape = 11

// 5개씩 담을 수 있는 바구니! 모두 담으려면 바구니가 몇 개 필요?

// Math.floor : 소수점 이하를 제거하는!
let fullBucket = Math.floor(grape / 5)

let lastBucket = fullBucket + (grape % 5 == 0 ? 0 : 1)
console.log(lastBucket)