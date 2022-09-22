// 생성자 함수 사용하자

// 생성자 함수 : 만들고 싶은 데이터에 대한 설계

function Dog(n, b){
  this.name = n
  this.breed = b
}

// 함수를 new로 호출하면, 객체가 생성된다. 즉, 함수는 생성자가 된다.
const dog1 = new Dog("바둑이", "진돗개")
const dog2 = new Dog("점박이", "시바견")
const dog3 = new Dog("돌돌이", "말티즈")
console.log(dog1.name)
console.log(dog2.name)
console.log(dog3.name)