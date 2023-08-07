const image = document.querySelector(".image");
const name = document.getElementById("name");

name.addEventListener("click", () => {
  image.classList.toggle("rotate-effect");
});
