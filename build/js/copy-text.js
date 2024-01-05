$('.copy').on("click", (event) => {
  navigator.clipboard.writeText($('.copy-text').text());
  $('.copy').addClass("copied");
  setTimeout(() => {
    $('.copy').removeClass("copied");
  }, 1000);
});