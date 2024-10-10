var personas = [];
var nombre = document.getElementById("nombre");
var formulario = document.getElementById("formulario");

function limpiarErrores() {
    let errores = document.getElementsByTagName("p");
    for (let error of Array.from(errores)) {
        error.remove();
    }
}

document.getElementById("boton").addEventListener("click", () => {
    if (nombre.value == "") {
        let mensaje = document.createElement("p");
        mensaje.textContent = "Debes introducir un nombre";
        mensaje.style=" color:red; font-size:10px"
        nombre.parentNode.insertBefore(mensaje, nombre)

    } else if(personas.includes(nombre.value)) {
        let mensaje = document.createElement("p");
        mensaje.textContent = "Ese nombre ya esta en la lista";
        mensaje.style=" color:red; font-size:10px"
        nombre.parentNode.insertBefore(mensaje, nombre)
    } else {
        personas.push(document.getElementById("nombre").value);
        limpiarErrores();
    }
    formulario.reset();

});


