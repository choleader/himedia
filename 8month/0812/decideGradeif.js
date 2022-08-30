onmessage = function (e) {
  let rate = e.data / 10;
  //   10으로 나눔
  rate = parseInt(rate);
  //   parseInt를 사용하여 소수점은 없어지도록 만듬
  if (rate >= 9) {
    result = "A";
  } else if (rate >= 8) {
    result = "B";
  } else if (rate >= 7) {
    result = "C";
  } else if (rate >= 6) {
    result = "D";
  } else {
    result = "F";
  }

  postMessage(result);
};
