// Seleccionamos elementos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.grid-galeria img');

let currentIndex = 0;

// Función para abrir el lightbox en una imagen específica
function openLightbox(index) {
  lightbox.style.display = 'block';
  lightboxImg.src = images[index].src;
  lightboxImg.alt = images[index].alt;
  currentIndex = index;
}

// Al hacer clic en una imagen
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    openLightbox(index);
  });
});

// Cerrar el lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Cerrar haciendo clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Ir a la imagen anterior
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
});

// Ir a la imagen siguiente
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
});
