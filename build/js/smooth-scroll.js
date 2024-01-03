$(".scroll-to").on("click", (event) => {
  event.preventDefault();
  let hash = event.target.hash;

  if (!hash) {
    hash = event.target.parentNode.hash;
  }

  if (hash && hash.length) {
    $("html, body").scrollTop($(hash).offset().top);
  }
});
