document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById('current-year');
  
  if (yearSpan) {
    const currentYear = new Date().getFullYear().toString();
    yearSpan.textContent = "";

    let index = 0;

    function typeYear() {
      if (index < currentYear.length) {
        yearSpan.textContent += currentYear.charAt(index);
        index++;
        setTimeout(typeYear, 200); // velocidad de escritura (200ms entre cada número)
      }
    }

    typeYear(); // Iniciar animación
  }
});
