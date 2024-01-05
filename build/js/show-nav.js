$(".ham").on("click", (event) => {
  $("header").toggleClass("show-nav");
});

$(".scroll-to").on("click", (event) => {
  $("header").removeClass("show-nav");
});