// Referencias a los elementos del DOM
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const menuBtn = document.getElementById('menuBtn');
const content = document.getElementById('content');

// Abrir el menú con el botón de menú
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar propagación para evitar cierres no deseados
    sidebar.classList.toggle('open'); // Alterna entre abrir/cerrar el menú
});

// Cerrar el menú con el botón de cerrar dentro del sidebar
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.remove('open'); // Cierra el menú
});

// Cerrar el menú al hacer clic fuera del sidebar
document.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// Evitar que los clics dentro del sidebar cierren el menú
sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});


// Obtener los elementos del submenu
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

// Evento para alternar el submenu
submenuToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar comportamiento por defecto del enlace
    submenu.classList.toggle('active'); // Alternar la clase 'active'
});

