
// EJEMPLO  CON OBJETO CONSTRUCTOR

// Definición de la función constructora con clases
class pruebas {
    constructor(preguntas, respuesta) {
        this.preguntas = preguntas;
        this.respuesta = respuesta;
    }
}


// Creación de objetos de preguntas y respuestas
const pruebas1 = new pruebas( "Acerca de Duki, cual fue su primer cancion?\n Marque la letra correcta.\na)No vendo trap\nb)Rockstar\nc)Sold out date", "a")
const pruebas2 = new pruebas("Cancion mas escuchada Duki ft Ysy a?\n Marque la letra correcta.\na)Otro level\nb)No da mas\nc)No se", "b")
const pruebas3 = new pruebas("Que dia Duki toco en su primer River?\n Marque la letra correcta.\na)2 de diciembre\nb)9 de diciembre\nc)3 de diciembre", "a")

const data = [pruebas1, pruebas2, pruebas3]

let puntaje = 0

for(let i = 0; i < data.length; i++){
    let input = prompt(data[i].preguntas)
    if(input===data[i].respuesta){
        puntaje++
        alert("Respuesta Valida")
    } else{
        alert("Respuesta incorrecta")
    }
}

alert(`Conseguiste ${puntaje} / ${data.length} respuestas correctas`)

