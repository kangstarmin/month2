// 값을 반환하는 함수 만들자
function getAddress(){
  console.log("주소를 줄게요")
  return "대전시 대덕구"
}

// 인자(재료)를 전달받는 함수 만들자
// 매개변수(parameter) : 인자를 임시 보관할 변수
// 매개변수는 여러 개 정의할 수 있다.
function cooking(ig1, ig2, ig3, ig4){

  let igs = `${ig1}, ${ig2}, ${ig3}, ${ig4}`
  console.log(`${igs} 넣고 맛있는 부대찌개를 끓이자~~`)
  console.log("지글지글 자글자글 보글보글 부글부글 바글바글")
}
cooking("스팸", "소세지", "치즈", "라면사리")

// 사용자의 구에 따른 동네 이름 반환하기
function getTownName(goo){
  if(goo == "서구"){
    return "둔산동"
  }else if(goo =="동구"){
    return "정동"
  }else if(goo == "대덕구"){
    return "신탄진동"
  }else if(goo == "유성구"){
    return "봉명동"
  }else if(goo == "중구"){
    return "은행동"
  }else{
    return "그런 구는 없어요~"
  }
}

console.log(getTownName("동구"))