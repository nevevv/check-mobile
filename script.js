const btn = document.querySelector(".advise");
const modal = document.querySelector(".modal");
const body = document.querySelector(".container");
const button = document.querySelector("button");

btn.addEventListener("click", () => {
  modal.style.transform = "translateY(-50%) translateX(-50%)";
  body.style.opacity = ".3";
});

button.addEventListener("click", () => {
  modal.style.transform = "translateY(-300vh) translateX(-50%)";
  body.style.opacity = "1";
});
