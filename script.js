let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle fungsionalitas hamburger menu bar responsif
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Untuk mengubah ikon menu
    navbar.classList.toggle('active'); // Untuk mengaktifkan/menutup navbar
};