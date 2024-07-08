


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function recorrido (data){
    data.forEach(producto => {
        const productoEl = document.createElement('div');
        productoEl.classList.add('contenedor');
        productoEl.innerHTML = `
            <div class="animation">
                <img src="${producto.imagen}" alt="${producto.nombre}" />
                <div class="title-name">
                    <p>${producto.nombre}</p>
                    <p class="precio">€${producto.precio}<span></span></p>
                    <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
            </div>
        `;
        contenedor.appendChild(productoEl);
    });
}

async function cargarMenu(){
    try{
        const resp = await fetch(`productos.json`);
        const data = await resp.json()
        recorrido(data)
    } catch (error){
        console.error(`Error al obtener los datos`)
    }
}

// Mostrar productos
    const contenedor = document.getElementById('id_contenedor');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos


function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalPrecio = document.getElementById('total-precio');
    const cartCount = document.getElementById('cart-count');
    carritoItems.innerHTML = "";
    let total = 0;
    carrito.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.textContent = `${item.nombre} - €${item.precio}`;
        carritoItems.appendChild(itemEl);
        total += item.precio;
    });

    totalPrecio.textContent = total.toFixed(2);
    cartCount.textContent = carrito.length;
}


document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
});


document.getElementById('carrito-icon').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('active');
});

document.getElementById(`comprar`).addEventListener(`click`,() => {
    Swal.fire({
    title: 'Muchas gracias!',
    text: 'Tu compra a sido realizada con exito',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    iconColor: "#080"
})
})



// Inicializar la visualización del carrito al cargar la página

actualizarCarrito();


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


// Evento para el botón de enviar
enviarBtn.addEventListener('click', () => {
    const usuario = parseInt(numeroInput.value);
    
    if (isNaN(usuario) || usuario < 1 || usuario > 10) {
        mostrarMensaje("Por favor, ingrese un número válido del 1 al 10.");
        return;
    }
    
    intentos++;
    
    
    if (usuario === numeroCorrecto) {
        Swal.fire({
    title: '¡Felicidades!',
    text: '"Has adivinado correctamente. Tendras un 20% de descuento en nuestra tienda por una prenda de tu elección."',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    iconColor: "#080"
})
        enviarBtn.disabled = true;  // Deshabilitar el botón después de ganar
    } else if (intentos < maxIntentos) {
        mostrarMensaje(`El número ingresado no es el correcto. Te quedan ${maxIntentos - intentos} intentos.`);
    } else {
        // mostrarMensaje("Lo siento, has agotado todos tus intentos. Mejor suerte la próxima vez.");
        Swal.fire({
            title: '¡Error!',
            text: '"Lo siento, has agotado todos tus intentos. Suerte la proxima vez."',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            iconColor: "#700"
        })
        enviarBtn.disabled = true;  // Deshabilitar el botón después de agotar intentos
    }
    
    // Guardar el estado del juego en el almacenamiento local
    localStorage.setItem('intentos', intentos);
});

// Mensaje de bienvenida inicial
mostrarMensaje("Ingrese un número del 1 al 10 para obtener tu descuento. ¡Tienes 3 intentos, suerte!");

// Recuperar el estado del juego desde el almacenamiento local al cargar la página
if (intentos >= maxIntentos) {
    enviarBtn.disabled = true;
}




