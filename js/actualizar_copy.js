document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById('current-year');

  if (yearSpan) {
    const currentYear = new Date().getFullYear().toString();
    yearSpan.textContent = "";

    const typeSound = new Audio('./sounds/typewriter-key-press-14650.mp3');

    let index = 0;

    function typeYear() {
      if (index < currentYear.length) {
        yearSpan.textContent += currentYear.charAt(index);
        typeSound.currentTime = 0;
        typeSound.play();
        index++;
        setTimeout(typeYear, 200);
      }
    }

    typeYear();
  }
});
