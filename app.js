// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Primeros pasos Crear un arrary para guardar los nombres de los participantes
let amigos = [];

function agregarAmigo() {

//Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    //eliminar los espacios en blanco
    const nombreAmigo = inputAmigo.value.trim();
//Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

//Actualizar el array de amigos
    amigos.push(nombreAmigo);
//Limpiar el campo de entrada
    inputAmigo.value = "";

    console.log(amigos);
}
