onmessage = function (e) {
  let result = "A";
  let rate = e.data / 10;
  // 문자열을 숫자로 변경
  rate = parseInt(rate);
  switch (rate) {
    case 10:
      result = "A";
    case 9:
      result = "A";
      break;
    case 8:
      result = "B";
      break;
    case 7:
      result = "C";
      break;
    case 6:
      result = "D";
      break;
    default:
      result = "F";
  }
  //   postMessage 함수로 reult값을 전송함
  postMessage(result);
};
