

// Carrito en almacenamiento local
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Cargamos los productos en un archivo JSON
async function cargarMenu(){
    try{
        const resp = await fetch(`productos.json`);
        const data = await resp.json()
        productos = data;
        recorrido(data)
    } catch (error){
        console.error(`Error al obtener los datos`, error)
    }
}

// Mostrar productos
    const contenedor = document.getElementById('id_contenedor');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos

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

// Agregamos los producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!carrito.some(item => item.id === id)) { // Evitar duplicados
    if (  carrito.push(producto));
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
           // Notificación con Toastify, libreria
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();

    } else {
        console.log('El producto ya está en el carrito');
    }
}


// Actualizamos el carrito
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


    
    // Habilitar o deshabilitar el botón de compra dependiendo el contenido del carrito
    if (carrito.length > 0) {
        comprar.disabled = false;
    } else {
        comprar.disabled = true;
    }
}


// Evento para vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    Swal.fire({
        title: "Estas seguro?",
        icon: 'question',
        iconColor: "#800",
        confirmButtonText: "Aceptar",
        text: 'Se encontraron productos en tu carrito',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        Swal.fire("Carrito vacio", "", "info");
        } else if (result.isDenied) {
        Swal.fire("Compra rechazada", "", "info");
        }
    });

    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
});

// Modal del carrito
document.getElementById('carrito-icon').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('active');
});

// Evento para la compra
document.getElementById(`comprar`).addEventListener(`click`,() => {
    Swal.fire({
        title: "Estas seguro?",
        icon: 'question',
        iconColor: "#590",
        showDenyButton: true,
        confirmButtonText: "Aceptar",
        text: '¡Aceptar para avanzar tu compra!',
        denyButtonText: `Rechazar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        Swal.fire("Tu compra a sido realizada con exito", "", "success");
        } else if (result.isDenied) {
        Swal.fire("Compra rechazada", "", "info");
        }
    });

 // Limpiar el carrito después de la compra
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
})

// Inicializar la visualización del carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarMenu();
    actualizarCarrito();
});


