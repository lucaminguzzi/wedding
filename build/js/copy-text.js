$('.copy-text').on("click", (event) => {
  navigator.clipboard.writeText(event.target.textContent);
});