var count = 0;
// var timerID = null;
onmessage = function (e) {
  if (e.data == "start") {
    timerID = setInterval(function myCallback() {
      count++;
      postMessage(count);
    }, 1000);
  } else {
    clearInterval(timerID);
    this.close();
  }
};
