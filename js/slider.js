const slidesContainer = document.getElementById("likedGamesList");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slidesContainer.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slidesContainer.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
