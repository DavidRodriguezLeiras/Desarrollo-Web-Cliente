var listaContactos = [];

/*
    Apartado 2 - formulario de alta de contactos

    Funcion engadirContacto(), primero almacenamos en variables todos los valores de los inputs, el formulario y el div donde listaremos los contactos
    posteriormente, añadimos al array listaContactos un nuevo objeto rellenando los atributos del objeto con los datos obtenidos.

    Ahora ordenamos los objetos comparando el atributo "nome" de cada uno pasandolo a minusculas usando el metodo toLowerCase().

    Una vez ordenados, borramos el contenido del div de la lista de contactos cambiando el valor de su atributo innerHTML por ''.
    
    A continuacion usando un bucle for-of sobre el array de objetos, en cada iteracion crearemos una variable parrafo y almacenamos dentro de ella una etiqueta <p>
    usando el metodo document.createElement(), almacenamos en el atributo textContent de esta variable un string en el que concatenamos los campos a mostrar
    en el formato indicado en el ejercicio.

    Finalmente , en la variable donde hemos guardado la referencia al div de la lista de contactos , haciendo uso del metodo appendChild() pasamos como parametro
    la variable parrafo, para agregar dentro del div la etiqueta <p> con la informacion del contacto dentro.

    Una vez hecho esto reseteamos el formulario usando el metodo reset() sobre la variable que hace referencia al formulario.
*/
function engadirContacto() {

    var nome = document.getElementById('nome').value;
    var apelidos = document.getElementById('apelidos').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var enderezo = document.getElementById('enderezo').value;
    var comentarios = document.getElementById('comentarios').value;
    var formulario = document.getElementById('formulario-contactos');
    var listaxeContactos = document.getElementById('listaxe-contactos');
 
    listaContactos.push({
        nome: nome,
        apelidos: apelidos,
        telefono: telefono,
        email: email,
        enderezo: enderezo,
        comentarios: comentarios
    });
    
    listaContactos.sort(function (a,b) {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        }
        return 0;
    })

    listaxeContactos.innerHTML = ''; // Borramos el contenido anterior

    for(let contacto of listaContactos){
        let parrafo = document.createElement('p');
        parrafo.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", Email: " + contacto.email + ", Enderezo: " + contacto.enderezo;
        listaxeContactos.appendChild(parrafo);
    };

    formulario.reset();
};

/*
    Apartado 3 - busca de contactos

    Funcion buscarContacto(), defino dos variables , "nome" que almacena el valor de la referencia del input con id nome
    y busqueda que de momento lo dejo undefined.

    Ahora haciendo uso de un bucle for-of sobre el array listaContactos comparo la variable "nome" pasada a minusculas con la funcion toLowerCase()
    con el atributo "nome" tambien en minusculas de cada objeto del array, una vez encuentra una coincidencia, hago copia del objeto que esta iterando 
    a la variable "busqueda" para posteriormente pasar el valor de cada atributo de "busqueda" al valor de cada campo del formulario.

*/

function buscarContacto() {
    var nome = document.getElementById('nome').value;
    var busqueda;
    for (let contacto of listaContactos) {
        if (nome.toLowerCase() == contacto.nome.toLowerCase()) {
            busqueda = { ...contacto };
            break;
        }
    }
    document.getElementById('nome').value = busqueda.nome;
    document.getElementById('apelidos').value = busqueda.apelidos;
    document.getElementById('telefono').value = busqueda.telefono;
    document.getElementById('email').value = busqueda.email;
    document.getElementById('enderezo').value = busqueda.enderezo;
    document.getElementById('comentarios').value = busqueda.comentarios;
};
