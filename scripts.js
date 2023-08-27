const btnApartments = document.querySelector(".btn-apartments");
const btnPark = document.querySelector(".btn-park");
const btnMansions = document.querySelector(".btn-mansions");
const btnRoad = document.querySelector(".btn-road");

btnApartments.addEventListener("click", function () {
  window.location.href = "/pages/apartments.html";
});

btnPark.addEventListener("click", function () {
  window.location.href = "/pages/park.html";
});

btnMansions.addEventListener("click", function () {
  window.location.href = "/pages/mansions.html";
});

btnRoad.addEventListener("click", function () {
  window.location.href = "/pages/road.html";
});
