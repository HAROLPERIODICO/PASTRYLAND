document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".promo-slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 4000);
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      currentIndex = index;
    }
  
    function nextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }
  
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const i = parseInt(dot.getAttribute("data-slide"));
        showSlide(i);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
      });
    });
  });
  