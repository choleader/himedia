// 각 메뉴를 클릭할 때 .on 클래스가 적용되어야 사용자가 클릭한 메뉴가 어떤 것인지
// 시각적으로 확인 할 수 있다. 따라서 현재 클릭한 메뉴에만 .on 클래스가 적용되어야 하고
// 클릭되지 않은 태그에는 removeClass 메소드를 사용하여 <li>태그의 클래스는 지우고
// 사용자가 선택한 메뉴($(this))만 .on 클래스가 적용되도록 addClass 메소드를 사용하여 스크립트를 만든다

$(document).ready(function () {
  $("#container").addClass("start");
  // nav li 즉 메뉴를 클릭 시 #container의 width가 100% 변경되도록 하자
  $("nav li").click(function () {
    $("#container").css("max-width", "100%");
    var id = $(this).attr("data-rol");
    // 메뉴를 클릭할 때마다 data-rol 어떤 속성 값이 나오는지
    // data의 값을 선택자로 사용할 수 있게 변수로 만든다 var id를 사용하여 현재(.this),
    // 이전(.prev), 이후(.next)의 클래스를 섹션 태그에 동적으로 적용시킨다
    $("nav li").removeClass("on");
    $(this).addClass("on"); // 자기 자신을 의미 즉 이벤트가 발생한 요소를 의미한다
    $(".content").removeClass("prev this next");
    // 클릭 시 가지고 있던 클래스를 모두 지운다
    $("#" + id)
      .addClass("this")
      .prevAll()
      .addClass("prev");
    // 클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev 클래스를 지정한다
    $("#" + id)
      .nextAll()
      .addClass("next");
    // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다
  });
  // 1. 로고 클릭 시 .logo_box 클래스명을 선택자로 하여 클릭 이벤트를 만든다
  // 2. prev/next/this 클래스를 삭제하고 <section class="content">의 클래스를 모두 지운다
  // 3. #container의 max-width를 1200px로 지정한다
  //    메뉴 역시 초기화 상태(아무것도 선택하지 않는 상태)에서 다른 컨텐츠에서 로고를 선택해
  //    <li class="on">의 클래스를 동적으로 삭제한다
  $(".logo_box").click(function () {
    $("nav li").removeClass("on");
    $(".content").removeClass("prev this next");
    $("#container").css("max-width", "1200px");
  });
});
