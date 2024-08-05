document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    });

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuToggle.checked = false;
            navbar.style.display = 'none';
        });
    });
});
