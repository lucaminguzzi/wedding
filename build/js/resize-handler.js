const homeSubtitle = $("#home h2").html();

function homeSubtitleHandler() {
  if (window.innerWidth <= 767 && $("#home h2").html().includes("<br>")) {
    $("#home h2").html(homeSubtitle.replaceAll("<br>", " "));
  } else if (
    window.innerWidth > 767 &&
    homeSubtitle.includes("<br>") &&
    !$("#home h2").html().includes("<br>")
  ) {
    $("#home h2").html(homeSubtitle);
  }
}
homeSubtitleHandler();

$(window).on("resize", homeSubtitleHandler);
