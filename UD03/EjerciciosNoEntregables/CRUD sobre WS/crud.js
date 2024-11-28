var btnCrear = document.getElementById("crear");
var btnLeer = document.getElementById("leer");
var btnModificar = document.getElementById("modificar");
var btnEliminar = document.getElementById("eliminar");
var propiedad = document.getElementById("propiedad");
var valor = document.getElementById("valor");
var divBotones = document.getElementById("botones");
var formulario = document.getElementById("formulario");

function crearError(msgError) {
    let error = document.createElement("p");
    error.textContent = msgError;
    error.className = "error";
    divBotones.parentNode.insertBefore(error,divBotones);
}

function limpiarError() {
    Array.from(document.getElementsByClassName("error")).forEach((error) => {
        error.remove();    
    });
}

btnCrear.addEventListener("click", () => {
    limpiarError();
    if (propiedad.value && valor.value) {
        //Añadimos la clave => valor al WS
        sessionStorage.setItem(propiedad.value, valor.value);
        formulario.reset();
    } else {
        if (!propiedad.value) {
            crearError("* Falta el campo propiedad.");
        }
        if (!valor.value) {
            crearError("* Falta el campo propiedad.");
        }
    }

    
})

btnLeer.addEventListener("click", () => {
    limpiarError();

    if (propiedad.value) {
        if (sessionStorage.getItem(propiedad.value)) {
            valor.value = sessionStorage.getItem(propiedad.value);
        } else {
            crearError("* No existe esa propiedad.");
        }
    } else {
        if (!propiedad.value) {
            crearError("* Falta el campo propiedad.");
        }
    }
    
})

btnModificar.addEventListener("click", () => {
    limpiarError();
    if (propiedad.value && valor.value) {
        //Añadimos la clave => valor al WS
        if (sessionStorage.getItem(propiedad.value)) {
            sessionStorage.setItem(propiedad.value, valor.value);
            formulario.reset();
        } else {
            crearError("* No existe esa propiedad");
        }
    } else {
        if (!propiedad.value) {
            crearError("* Falta el campo propiedad.");
        }
        if (!valor.value) {
            crearError("* Falta el campo propiedad.");
        } 
    }

    
})

btnEliminar.addEventListener("click", () => {
    limpiarError();
    //Eliminamos la clave indicada
    if (propiedad.value) {
        if (sessionStorage.getItem(propiedad.value)) {
            sessionStorage.removeItem(propiedad.value);
            formulario.reset();
        } else {
            crearError("* No existe esa propiedad.");
        }
    } else {
        if (!propiedad.value) {
            crearError("* Falta el campo propiedad.");
        }
    }
    
    
})