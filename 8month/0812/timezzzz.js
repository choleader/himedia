onmessage = function (e) {
  var count = 0;
  var timerID = null;

  function myCallback() {
    //1초 간격으로 호출
    count++;
  } // 시작과 동시에 1씩 추가
  postMessage(count); // 메인의 addWorker.onmessage로 데이터 넘김
};

var count = 0;
var timerID = null;
onmessage = function (e) {
  if (e.data == "start") {
    timerID = setInterval(function () {
      count++;
      postMessage(count);
    }, 1000);
  } else {
    clearInterval(timerID);
  }

  // function myCallback() {
  //   count++;
  //   postMessage(count);
  // }
};
