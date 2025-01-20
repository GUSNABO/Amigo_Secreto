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

    //console.log(amigos);

    mostrarAmigos();
}
//Fin del Paso 1

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {

    //Obtener el elemento de la lista
    const listaHTML = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    listaHTML.innerHTML = "";

    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Asignar el nombre del amigo como texto del <li>
        li.classList.add('name-item');

    //Agregar elementos a la lista
    listaHTML.appendChild(li);

    }
}
//Fin del Paso 2

//Implementa una función para sortear los amigos
function sortearAmigo() {

    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    //Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li class="result-item">Amigo Secreto: <strong>${amigoSorteado}</strong></li>`;
}
//Fin del Paso 3
