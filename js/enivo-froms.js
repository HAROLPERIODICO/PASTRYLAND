// archivo: promociones-slider.js
let slideIndex = 0;
const slides = document.querySelectorAll('.promo-slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 4000); // Cambia cada 4 segundos
