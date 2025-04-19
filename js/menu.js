(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    // Abrir menú
    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    // Cerrar menú
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // Scroll suave al hacer clic en los enlaces del menú
    const navLinks = document.querySelectorAll('.nav__link a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 76, // Ajusta si tienes un header fijo
                    behavior: 'smooth'
                });
            }

            // Cerrar el menú (útil en vista móvil)
            menu.classList.remove('nav__link--show');
        });
    });

})();
