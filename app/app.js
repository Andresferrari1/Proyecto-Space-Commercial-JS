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
if (localStorage.getItem('intentos')) {
    intentos = parseInt(localStorage.getItem('intentos'));
    if (intentos >= maxIntentos) {
        enviarBtn.disabled = true;
    }
}

