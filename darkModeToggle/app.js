const main = document.querySelector(".main");
const button = document.querySelector(".circle");

button.addEventListener("click", () => {
  main.classList.toggle("active");
});
