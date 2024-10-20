// Seleccionamos el checkbox y el body
const checkbox = document.getElementById('checkboxInput');
const body = document.body;
const navHeader = document.querySelector('.nav_header');
const navLinks = document.querySelectorAll('.nav_links li a');
const nav_Links = document.querySelector('.nav_links');
const navButtons = document.querySelectorAll('.nav_buttons a');
const nav_Buttons = document.querySelectorAll('.nav_buttons');
const aboutUs = document.querySelector('.about_us');
const contactForm = document.querySelector('.contact_form');
const footer = document.querySelector('.footer');
const menuToggle = document.getElementById('menu_toggle');
const subMenu = document.getElementById('submenu');

// Comprobamos si hay un tema guardado en el almacenamiento local
const savedTheme = localStorage.getItem('theme');

// Si hay un tema guardado, lo aplicamos
if (savedTheme === 'light') {
    body.classList.add('light');
    navHeader.classList.add('light');
    navLinks.forEach(link => link.classList.add('light'));
    navButtons.forEach(button => button.classList.add('light'));
    aboutUs.classList.add('light');
    contactForm.classList.add('light');
    footer.classList.add('light');
    menuToggle.classList.add('light');
    subMenu.classList.add('light');
    checkbox.checked = true; // Marca el checkbox si el tema es claro
} else {
    body.classList.remove('light');
    navHeader.classList.remove('light');
    navLinks.forEach(link => link.classList.remove('light'));
    navButtons.forEach(button => button.classList.remove('light'));
    aboutUs.classList.remove('light');
    contactForm.classList.remove('light');
    footer.classList.remove('light');
    menuToggle.classList.remove('light');
    subMenu.classList.remove('light');
    checkbox.checked = false; // Desmarca el checkbox si el tema es oscuro
}

// Evento para cambiar el tema al cambiar el checkbox
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        // Si el checkbox está marcado, cambiamos a tema claro
        body.classList.add('light');
        navHeader.classList.add('light');
        navLinks.forEach(link => link.classList.add('light'));
        navButtons.forEach(button => button.classList.add('light'));
        aboutUs.classList.add('light');
        contactForm.classList.add('light');
        footer.classList.add('light');
        menuToggle.classList.add('light');
        subMenu.classList.add('light');
        localStorage.setItem('theme', 'light'); // Guardamos la preferencia
    } else {
        // Si el checkbox no está marcado, volvemos al tema oscuro
        body.classList.remove('light');
        navHeader.classList.remove('light');
        navLinks.forEach(link => link.classList.remove('light'));
        navButtons.forEach(button => button.classList.remove('light'));
        aboutUs.classList.remove('light');
        contactForm.classList.remove('light');
        footer.classList.remove('light'); 
        menuToggle.classList.remove('light');
        subMenu.classList.remove('light');
        localStorage.setItem('theme', 'dark'); // Guardamos la preferencia
    }
});

document.getElementById('menu_toggle').addEventListener('click', function() {
    document.getElementById('nav_links').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu_toggle');
    const navLinks = document.querySelector('.nav_links');

    menuToggle.addEventListener('click', function () {
        // Alternar la clase 'active' en la barra de navegación para mostrar/ocultar los enlaces
        navLinks.classList.toggle('active');
        
        // También puedes hacer que el icono cambie al abrir/cerrar el menú
        menuToggle.classList.toggle('active');

    });
});