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



// Seleccionamos los elementos del DOM
const numeroInput = document.getElementById('numero');
const enviarBtn = document.getElementById('enviar');
const messageEl = document.getElementById('message');


// Variables del juego
let intentos = 0;
const maxIntentos = 3;
const numeroCorrecto = 8;  // Número a adivinar

// Función para mostrar un mensaje al usuario y en la consola
function mostrarMensaje(mensaje) {
    messageEl.textContent = mensaje;
    console.log(mensaje);
}

// Llamar a la función para mostrar los productos
mostrarProductos();

// Evento para el botón de enviar
enviarBtn.addEventListener('click', () => {
    const usuario = parseInt(numeroInput.value);
    
    if (isNaN(usuario) || usuario < 1 || usuario > 10) {
        mostrarMensaje("Por favor, ingrese un número válido del 1 al 10.");
        return;
    }
    
    intentos++;
    
    if (usuario === numeroCorrecto) {
        mostrarMensaje("¡Felicidades! Has adivinado correctamente. Has ganado un 20% de descuento en nuestra tienda en un producto de tu elección.");
        enviarBtn.disabled = true;  // Deshabilitar el botón después de ganar
    } else if (intentos < maxIntentos) {
        mostrarMensaje(`El número ingresado no es el correcto. Te quedan ${maxIntentos - intentos} intentos.`);
    } else {
        mostrarMensaje("Lo siento, has agotado todos tus intentos. Mejor suerte la próxima vez.");
        enviarBtn.disabled = true;  // Deshabilitar el botón después de agotar intentos
    }

    // Guardar el estado del juego en el almacenamiento local
    localStorage.setItem('intentos', intentos);
});

// Mensaje de bienvenida inicial
mostrarMensaje("Ingrese un número del 1 al 10 para obtener un descuento especial. ¡Tienes 3 intentos, suerte!");

// Recuperar el estado del juego desde el almacenamiento local al cargar la página
if (intentos >= maxIntentos) {
    enviarBtn.disabled = true;
}
