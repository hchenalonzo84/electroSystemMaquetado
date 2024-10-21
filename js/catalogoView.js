// JSON de productos con IDs
const productos = [
    { id: 1, nombre: "EX DISPLAY : MSI Pro 16", precio: 499.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 2, nombre: "EX DISPLAY : MSI Pro 17", precio: 599.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 3, nombre: "EX DISPLAY : MSI Gaming", precio: 799.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 4, nombre: "EX DISPLAY : MSI Business", precio: 699.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 5, nombre: "EX DISPLAY : MSI Office", precio: 450.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 6, nombre: "Laptop HP Pavilion", precio: 650.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 7, nombre: "Laptop Acer Aspire", precio: 550.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 8, nombre: "Lenovo ThinkPad", precio: 800.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 9, nombre: "Dell XPS 13", precio: 1200.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 10, nombre: "MacBook Pro", precio: 1500.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 11, nombre: "ASUS ROG Zephyrus", precio: 1700.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 12, nombre: "Microsoft Surface", precio: 1300.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 13, nombre: "Razer Blade", precio: 2200.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 14, nombre: "HP EliteBook", precio: 1000.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 15, nombre: "Acer Nitro 5", precio: 900.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 16, nombre: "MSI Stealth 15", precio: 2000.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 17, nombre: "Dell Inspiron", precio: 700.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 18, nombre: "ASUS TUF Gaming", precio: 1200.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 19, nombre: "Samsung Galaxy Book", precio: 1100.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 20, nombre: "LG Gram", precio: 1300.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 21, nombre: "MacBook Air", precio: 999.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 22, nombre: "Huawei MateBook", precio: 850.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 23, nombre: "Google Pixelbook", precio: 1400.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 24, nombre: "Dell G5 15", precio: 950.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 25, nombre: "Lenovo Yoga", precio: 1250.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 26, nombre: "ASUS ZenBook", precio: 1100.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 27, nombre: "HP Spectre x360", precio: 1600.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 28, nombre: "Razer Blade Stealth", precio: 1800.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 29, nombre: "Alienware M15", precio: 2500.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 30, nombre: "Acer Predator Helios", precio: 1900.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 31, nombre: "Microsoft Surface Book", precio: 2100.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 32, nombre: "Apple MacBook Pro 16", precio: 2700.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 33, nombre: "ASUS ROG Strix", precio: 1500.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 34, nombre: "HP Omen", precio: 1400.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 35, nombre: "Dell Latitude", precio: 1300.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 36, nombre: "Lenovo Legion", precio: 1700.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 37, nombre: "Acer Swift", precio: 1100.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 38, nombre: "MSI Summit", precio: 1900.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 39, nombre: "Samsung Galaxy Chromebook", precio: 1200.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 40, nombre: "Huawei MateBook D", precio: 700.00, stock: false, imagen: "/resources/laptop.png" },
    { id: 41, nombre: "Google Pixelbook Go", precio: 999.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 42, nombre: "ASUS VivoBook", precio: 800.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 43, nombre: "HP Chromebook", precio: 300.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 44, nombre: "Dell Vostro", precio: 600.00, stock: true, imagen: "/resources/laptop.png" },
    { id: 45, nombre: "MacBook Pro M1", precio: 2000.00, stock: true, imagen: "/resources/laptop.png" }
];

// Variables globales
let productosPorPagina = 12;
let paginaActual = 1;
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Recuperar carrito desde localStorage

// Referencias a los elementos del DOM
const gridProductos = document.querySelector('.grid-productos');
const listaCarrito = document.querySelector('.lista-carrito');
const contadorCarrito = document.querySelector('.contador-carrito');
const carritoOverlay = document.querySelector('.carrito-overlay');
const btnVaciarCarrito = document.querySelector('.btn-vaciar-carrito');
const btnCarrito = document.querySelector('.btn-carrito');
const btnConfirmar = document.createElement('button'); // Botón de confirmación

// Función para renderizar los productos según la página
function renderizarProductos(pagina) {
    gridProductos.innerHTML = ''; // Limpiar productos anteriores

    const inicio = (pagina - 1) * productosPorPagina;
    const productosPagina = productos.slice(inicio, inicio + productosPorPagina);

    productosPagina.forEach(producto => {
        const productoHTML = `
            <div class="producto-tarjeta">
                <a href="/pages/catalogoDetalle.html">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </a>
                <p class="producto-nombre">${producto.nombre}</p>
                <p class="producto-precio">$${producto.precio.toFixed(2)}</p>
                <span class="producto-stock">${producto.stock ? 'In stock' : 'Out of stock'}</span>
                <button class="btn-agregar" data-id="${producto.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        gridProductos.innerHTML += productoHTML;
    });

    // Agregar eventos a los botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => agregarAlCarrito(boton.dataset.id));
    });

    actualizarConteoProductos(inicio + 1, Math.min(inicio + productosPorPagina, productos.length), productos.length);
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id == id);
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar el carrito y guardarlo en localStorage
function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach((producto, index) => {
        const itemCarrito = `
            <li>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-carrito">
                ${producto.nombre} - $${producto.precio.toFixed(2)}
                <button class="btn-quitar" data-index="${index}">Quitar</button>
            </li>
        `;
        listaCarrito.innerHTML += itemCarrito;
    });

    contadorCarrito.textContent = carrito.length; // Actualizar contador

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Agregar eventos a los botones de quitar
    const botonesQuitar = document.querySelectorAll('.btn-quitar');
    botonesQuitar.forEach(boton => {
        boton.addEventListener('click', () => quitarDelCarrito(boton.dataset.index));
    });
}

// Función para quitar un producto del carrito
function quitarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para vaciar el carrito
btnVaciarCarrito.addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
});

// Mostrar/ocultar el carrito
btnCarrito.addEventListener('click', () => {
    carritoOverlay.classList.toggle('open');
});

// Cerrar el carrito al hacer clic fuera de él
document.addEventListener('click', (event) => {
    if (!carritoOverlay.contains(event.target) && !btnCarrito.contains(event.target)) {
        carritoOverlay.classList.remove('open');
    }
});

// Botón de confirmación de compra
btnConfirmar.textContent = 'Confirmar Compra';
btnConfirmar.classList.add('btn-confirmar');
carritoOverlay.appendChild(btnConfirmar);

btnConfirmar.addEventListener('click', () => {
    if (carrito.length > 0) {
        alert('Compra confirmada. Redirigiendo a la página de confirmación...');
        // Redirigir a la página de confirmación (modificar según ruta)
        window.location.href = "/pages/confirmacion.html";
    } else {
        alert('El carrito está vacío.');
    }
});

// Función para actualizar el conteo de productos
function actualizarConteoProductos(inicio, fin, total) {
    const infoProductos = document.querySelector('.informacion-productos p');
    infoProductos.textContent = `Productos ${inicio}-${fin} de ${total}`;
}

// Función para configurar la paginación
function configurarPaginacion() {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const paginacionContainer = document.querySelector('.paginacion');
    paginacionContainer.innerHTML = ''; // Limpiar paginación anterior

    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement('button');
        boton.classList.add('pagina-btn');
        if (i === paginaActual) boton.classList.add('active');
        boton.textContent = i;
        boton.addEventListener('click', () => {
            paginaActual = i;
            renderizarProductos(paginaActual);
            configurarPaginacion();
        });
        paginacionContainer.appendChild(boton);
    }
}

// Iniciar la vista con la primera página y la paginación
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(paginaActual);
    configurarPaginacion();
    actualizarCarrito(); // Cargar el carrito desde localStorage
});
