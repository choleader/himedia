$(".slide1 > div:gt(0)").hide();
setInterval(function () {
  $(".slide1 > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".slide1");
}, 3000);

// ★★★★★★★ul li로 했을 때 슬라이드 제이쿼리는 아래와 같이★★★★★★★★
// <div class="slideContainer">
//         <div class="slide1">
//             <ul>
//                 <li><a href="#"><img src="glass1.jpg" alt="슬라이드7"></a></li>
//                 <li><a href="#"><img src="glass2.jpg" alt="슬라이드8"></a></li>
//                 <li><a href="#"><img src="glass3.jpg" alt="슬라이드9"></a></li>
//             </ul>

//         </div>
// </div>

// $(".slide1>div").hide();
// $(".slide1>div:first-child").show();

// setInterval(function () {
//   $(".slide1>div:first-child")
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end(1000)
//     .appendTo(".slide1>div");
// }, 3000);
