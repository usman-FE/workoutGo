const map = document.querySelector("#map");
const form = document.querySelector(".workout-form");

map.addEventListener("click", function () {
  console.log("click");
  form.classList.toggle("hidden");
});
