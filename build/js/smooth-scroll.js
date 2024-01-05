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

$(window).on("scroll", (event) => {
  if ($("html, body").scrollTop() < 50) {
    $("header").removeClass("reduce");
  } else {
    $("header").addClass("reduce");
  }

  const scrollBottom = $("html, body").scrollTop() + $(window).height();
  const delta = $(window).height() / 3;

  if (scrollBottom - $("#contacts").height() / 2 >= $("#contacts").offset().top) {
    $("header .link").removeClass("active");
    $("header .link[href='#contacts']").addClass("active");
  } else if ($("html, body").scrollTop() >= $("#contribuisci").offset().top - delta) {
    $("header .link").removeClass("active");
    $("header .link[href='#contribuisci']").addClass("active");
  } else if ($("html, body").scrollTop() >= $("#dove").offset().top - delta) {
    $("header .link").removeClass("active");
    $("header .link[href='#dove']").addClass("active");
  } else if ($("html, body").scrollTop() >= $("#quando").offset().top - delta) {
    $("header .link").removeClass("active");
    $("header .link[href='#quando']").addClass("active");
  } else {
    $("header .link").removeClass("active");
  }
})
