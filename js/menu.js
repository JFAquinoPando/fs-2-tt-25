document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar el menú al hacer click en un enlace
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Cerrar el menú al hacer click fuera de él
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});
