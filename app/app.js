
//Creamos una funcion para verificar si el numero ingresado es mayor o igual a 1 y menor o igual a 5. 
function numeroValido(numero) {
    const numTurno = parseInt(numero);
    return !isNaN(numTurno) && numTurno >= 1 && numTurno <= 5;
}

// Mostramos el mensaje de bienvenida
function mensajeDeBienvenida() {
    alert(
        "Bienvenido al Centro Odontológico. Te ayudaremos a encontrar tu consultorio."
    );
    alert("¡En nuestro centro, cuidamos tu sonrisa!");
    alert("¡Si tu turno es del 1 al 5 escríbelo para saber tu consultorio!");
}
mensajeDeBienvenida();

//  Funcion de despedida.
function despedida(){
    alert("¡Gracias por visitar nuestro Centro Odontológico! Esperamos verte pronto.")
}

// Usamos prompt para que el usuario utilice un numero de turno y luego se dirija al consultorio.
const usuario = prompt(
    "Ingrese el número del turno para poder dirigirse al consultorio:"
);

if (numeroValido(usuario)) {
    // Si el número de turno es válido, determinamos el consultorio correspondiente.
    if (usuario === "5") {
        alert(
            "¡Correcto! El consultorio al que debe dirigase es el 255 ubicado en el piso 3."
        );
    } else if (usuario === "1") {
        alert(
            "¡Correcto! El consultorio al que debe dirigase es el 121 ubicado en el piso 2."
        );
    } else if (usuario === "2") {
        alert(
            "¡Correcto! El consultorio al que debe dirigase es el 10 ubicado en el piso 1."
        );
    } else if (usuario === "3") {
        alert(
            "¡Correcto! El consultorio al que debe dirigase es el 92 ubicado en el piso 1."
        );
    } else if (usuario === "4") {
        alert(
            "¡Correcto! El consultorio al que debe dirigase es el 50 ubicado en el piso 1."
        );
    }
    despedida()
    } else {
        alert("El número ingresado no es el deseado. Por favor, intente nuevamente.");
    }

