document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".grid-galeria img");
  let currentIndex = 0;

  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  const img = document.createElement("img");
  img.classList.add("lightbox-content");

  const caption = document.createElement("div");
  caption.classList.add("lightbox-caption");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";

  const prevBtn = document.createElement("span");
  prevBtn.classList.add("prev");
  prevBtn.innerHTML = "&#10094;";

  const nextBtn = document.createElement("span");
  nextBtn.classList.add("next");
  nextBtn.innerHTML = "&#10095;";

  lightbox.appendChild(img);
  lightbox.appendChild(caption);
  lightbox.appendChild(closeBtn);
  lightbox.appendChild(prevBtn);
  lightbox.appendChild(nextBtn);
  document.body.appendChild(lightbox);

  function showImage(index) {
    if (index >= 0 && index < images.length) {
      img.src = images[index].src;
      img.alt = images[index].alt;
      caption.textContent = images[index].alt;
      currentIndex = index;
    }
  }

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      showImage(index);
      lightbox.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  prevBtn.addEventListener("click", () => {
    showImage((currentIndex - 1 + images.length) % images.length);
  });

  nextBtn.addEventListener("click", () => {
    showImage((currentIndex + 1) % images.length);
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "block") {
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "Escape") closeBtn.click();
    }
  });
});
