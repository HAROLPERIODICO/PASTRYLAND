document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById('current-year');
  
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    
    // Animación de aparición suave
    yearSpan.style.opacity = 0;
    yearSpan.style.transition = "opacity 1s ease-in-out";
    
    setTimeout(() => {
      yearSpan.style.opacity = 1;
    }, 100); // Pequeña espera para que se vea la animación
  }
});
