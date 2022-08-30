var count = 0; // 1초마다 증가하는 카운트 값
var timerID = null; //타이머 ID
onmessage = function (e) {
  if (e.data == "start") {
    //받은 데이터가 "start"일 때
    if (timerID != null) {
      //타이머 ID가 초기 값이 아니면
      return; //타이머 작동중이라면 리턴
    }
    //타이머 작동, 1초 간격으로 myCallback() 함수 실행
    timerID = this.setInterval(myCallback, 100);
  } else if (e.data == "stop") {
    //받은 데이터가 "stop"일 때
    if (timerID == null) {
      // 타이머 ID가 초기값이면
      return; // 타이머가 작동중이지 않으면 리턴
    }
    clearInterval(timerID); //동작 중인 타이머 종료
    close(); // 워커 태스트 종료. 더이상 메시지 받지 않음
  }
};
function myCallback() {
  //1초 간격으로 호출
  count++; // 카운트값 증가
}
