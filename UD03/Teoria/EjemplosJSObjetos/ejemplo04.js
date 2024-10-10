//Guardamos el cuerpo en una variable
var cuerpo = document.getElementById("cuerpo");

//Creamos un nuevo titulo haciendo uso de document.createElement();
var titulo = document.createElement("h1");
//Añadimos contenido al elemento que acabamos de crear
titulo.textContent = "Comunidades Autonomas";

//Agregamos el elemento creado a la pagina, debajo del cuerpo
cuerpo.appendChild(titulo);

//Modificamos el elemento creado, aunque lo hayamos añadido previamente, al ser esto
//una referencia al elemento, los cambios se veran reflejados.
titulo.style = "color: red";
titulo.textoOculto = "Hola Mundo!";
console.log(titulo.textoOculto);

// Añadimos un elemento de lista no ordenada
var lista = document.createElement("ul");
cuerpo.appendChild(lista);

// Declaramos un array con los datos de las comunidades autonomas
var comunidadesAutonomas = ["Galicia", "Aragon","Castilla y Leon", "Andalucia", "Baleares", "Asturias"];
/*
Con un foreach, creamos un elemento li por cada elemento del array
le damos al nuevo elemento li el valor del elemento que esta iterando
añadimos el elemento li a la lista en el HTML.
*/
comunidadesAutonomas.forEach((comunidad) => {
    let comunidadLista = document.createElement("li");
    comunidadLista.textContent = comunidad;
    //Añadimos la clase comunidad a cada li
    comunidadLista.classList.add("comunidad");
    lista.appendChild(comunidadLista);
});

/*
Añadir un boton que ponga independizarse, al pulsar el boton, 
eliminara el boton de castilla y leon.
*/
document.getElementById("boton").addEventListener("click", () => {
    var li = Array.from(document.getElementsByTagName("li"));
    for (let item of li) {
        if (item.textContent == "Castilla y Leon") {
            let leon = document.createElement("li");
            leon.textContent = "Pais Leones";
            let castilla = document.createElement("li");
            castilla.textContent = "Castilla";
            lista.insertBefore(leon, item);
            lista.replaceChild(castilla,item);
        }
    }
    
});
