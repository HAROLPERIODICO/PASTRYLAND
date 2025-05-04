// Detecta cuando un elemento entra en la vista para aplicar animaciones
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const inView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const handleScroll = () => {
    elements.forEach((element) => {
      if (inView(element)) {
        element.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Para asegurar que se vea todo al cargar la página
});
