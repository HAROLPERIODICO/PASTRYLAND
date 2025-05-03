// Función para abrir la lightbox y mostrar la imagen con su caption
function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.querySelector(".lightbox-content");
  const caption = document.querySelector(".lightbox-caption");
  
  // Mostrar la lightbox
  lightbox.style.display = "block";
  
  // Establecer la imagen y el caption
  const images = document.querySelectorAll(".grid-galeria img");
  const selectedImage = images[index];
  lightboxImage.src = selectedImage.src;
  caption.textContent = selectedImage.alt; // Asume que el atributo 'alt' es el caption
  
  // Reiniciar la animación del caption
  caption.style.animation = 'none';  // Eliminar animación
  caption.offsetHeight; // Trigger reflow para reiniciar la animación
  caption.style.animation = 'fadeInCaption 0.6s forwards';  // Reaplicar animación
}

// Función para cerrar la lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Funciones para navegar entre las imágenes
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  openLightbox(currentIndex);
}

// Inicialización de variables
let currentIndex = 0;
const totalImages = document.querySelectorAll(".grid-galeria img").length;

// Asignar los eventos para cada imagen
const images = document.querySelectorAll(".grid-galeria img");
images.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

// Asignar eventos a los botones de navegación
document.querySelector(".close").addEventListener("click", closeLightbox);
document.querySelector(".prev").addEventListener("click", () => changeImage(-1));
document.querySelector(".next").addEventListener("click", () => changeImage(1));
