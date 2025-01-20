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