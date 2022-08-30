// 메인 자동 슬라이드 제이카레
$(".slide1 > div:gt(0)").hide();
setInterval(function () {
  $(".slide1 > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".slide1");
}, 3000);

// ------------------------------------
