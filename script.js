const img = document.querySelector(".item1");
const btn = document.querySelector(".arrow");

btn.addEventListener("click", () => {
  img.classList.toggle("hide");
  btn.classList.toggle("arrowRotate");
});
