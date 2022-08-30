var count = 0;
var timerID = null;
onmessage = function (e) {
  if (e.data == "start") {
    timerID = setInterval(function () {
      count++;
      postMessage(count);
    }, 1000);
  } else if (e.data == "stop") {
    clearInterval(timerID);
  }

  // function myCallback() {
  //   count++;
  //   postMessage(count);
  // }
};
