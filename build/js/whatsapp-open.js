$('.whatsapp').on("click", (event) => {
  console.log(event.target);
  const number = event.target.textContent.replaceAll(" ", "");
  window.open(`https://wa.me/${number}`, "_blank");
})