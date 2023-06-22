document.querySelector(".navbar-toggler").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".navbar-collapse").classList.toggle("collapse");
});

if (document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    speed: 700,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
