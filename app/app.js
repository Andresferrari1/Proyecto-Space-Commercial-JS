
//Creamos una funcion para verificar si el numero ingresado es mayor o igual a 1 y menor o igual a 5. 
function numeroValido(numero) {
    const numTurno = parseInt(numero);
    return !isNaN(numTurno) && numTurno >= 1 && numTurno <= 10;
}

// Mostramos el mensaje de bienvenida
function mensajeDeBienvenida() {
    alert(
        "Bienvenido a nuestro espacio comercial."
    );
    alert("¡Antes de visitar nuestra tienda, tenemos un juego para ti con un beneficio increible!");
    alert("¡Llevate una producto al 20% de descuento tan solo con adivinar un numero del 1 al 10!");
}
mensajeDeBienvenida();

// Funcion de despedida.
function despedida() {
    alert("¡Gracias por visitar nuestro pagina! Te esperamos pronto con mas beneficios.")
}

// Bucle para permitir al usuario intentar adivinar el número
let intentos = 0;
let numeroCorrecto = false;

while (intentos < 3 && !numeroCorrecto) {
    const usuario = prompt(`Ingrese un número del 1 al 10 para obtener un descuento especial: \n ¡¡Tienes 3 intentos, suerte!!`);

    if (numeroValido(usuario)) {
        // Si el número es válido, verificamos si es el número correcto.
        if (usuario === "8") {
            alert("¡Felicidades! Has adivinado correctamente. Has ganado un 20% de descuento en nuestra tienda en un producto de tu elección.");
            numeroCorrecto = true;
        } else {
            alert("El número ingresado no es el correcto. Por favor, intente nuevamente.");
        }
        intentos++;
    } else {
        alert("El número ingresado no es válido. Por favor, ingrese un número del 1 al 10.");
    }
}

if (!numeroCorrecto) {
    alert("Lo siento, has agotado todos tus intentos. Mejor suerte la próxima vez.");
}
despedida();

