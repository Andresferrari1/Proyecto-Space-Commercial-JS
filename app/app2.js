// Productos
const productos = [
    { id: 1, nombre: "Producto 1", precio: 199.99, imagen: "./imgs/mac1.jpg" },
    { id: 2, nombre: "Producto 2", precio: 199.99, imagen: "./imgs/mac2.jpg" },
    { id: 3, nombre: "Producto 3", precio: 199.99, imagen: "./imgs/iphone10.jpg" },
    { id: 4, nombre: "Producto 4", precio: 199.99, imagen: "./imgs/setup.jpg" },
    { id: 5, nombre: "Producto 5", precio: 199.99, imagen: "./imgs/mac3.jpg" },
    { id: 6, nombre: "Producto 6", precio: 199.99, imagen: "./imgs/iphone13.jpg" }
];

// Mostrar productos
function mostrarProductos() {
    const contenedor = document.getElementById('id_contenedor');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos

    productos.forEach(producto => {
        const productoEl = document.createElement('div');
        productoEl.classList.add('contenedor');
        productoEl.innerHTML = `
            <div class="animation" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img src="${producto.imagen}" alt="${producto.nombre}" />
                <div class="title-name">
                    <p>${producto.nombre}</p>
                    <p class="precio">$${producto.precio}<span></span></p>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        `;
        contenedor.appendChild(productoEl);
    });
}

// Llamar a la función para mostrar los productos
mostrarProductos();

