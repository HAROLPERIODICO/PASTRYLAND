// Seleccionamos el lightbox y su contenido
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Seleccionamos todas las imágenes dentro de la galería
const images = document.querySelectorAll('.grid-galeria img');

// Cuando el usuario hace clic en una imagen
images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block'; // Mostrar el lightbox
    lightboxImg.src = image.src; // Cambiar la imagen al src de la que clickeó
    lightboxImg.alt = image.alt; // También ponemos el alt
  });
});

// Cuando el usuario hace clic en la X de cerrar
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none'; // Ocultar el lightbox
});

// También puedes cerrar haciendo clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
