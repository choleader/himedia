var count = 0;
onmessage = function (e) {
  // 만일 전송된 e의 값이 start이면
  if (e.data == "start") {
    // setInterval()함수를 사용하여 myCallback 함수를 100ms 주기로 실행
    timer = setInterval(myCallback, 1000);
  }
  // 만일 전송된 e의 값이 stop이면
  else if (e.data == "stop") {
    // clearInterval() 함수를 사용하여 카운팅을 중단한다.
    clearInterval(timer);
  }
};
// 1초 간격으로 호출
function myCallback() {
  // 시작과 동시에 1씩 추가
  count++; // 메인의 addWorker.onmessage로 데이터 넘김
  postMessage(count);
}
