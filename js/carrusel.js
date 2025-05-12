let indiceCarrusel = 0;
const items = document.querySelector('.carrusel-items');
const totalItems = document.querySelectorAll('.carrusel-item').length;
const btnPrev = document.querySelector('.carrusel-btn.prev');
const btnNext = document.querySelector('.carrusel-btn.next');
const dotsContainer = document.querySelector('.carrusel-dots');

// Crear puntos
for (let i = 0; i < totalItems; i++) {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => {
    indiceCarrusel = i;
    actualizarCarrusel();
  });
  dotsContainer.appendChild(dot);
}

btnPrev.addEventListener('click', () => {
  indiceCarrusel = (indiceCarrusel - 1 + totalItems) % totalItems;
  actualizarCarrusel();
});

btnNext.addEventListener('click', () => {
  indiceCarrusel = (indiceCarrusel + 1) % totalItems;
  actualizarCarrusel();
});

function actualizarCarrusel() {
  items.style.transform = `translateX(-${indiceCarrusel * 100}%)`;

  // Actualizar dots
  dotsContainer.querySelectorAll('button').forEach((dot, index) => {
    dot.classList.toggle('active', index === indiceCarrusel);
  });

  // Pausar todos los videos
  document.querySelectorAll('.carrusel-item video').forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  // Reproducir video activo
  const activo = document.querySelectorAll('.carrusel-item')[indiceCarrusel];
  const video = activo.querySelector('video');
  if (video) video.play();
}

// Inicializar carrusel
actualizarCarrusel();
