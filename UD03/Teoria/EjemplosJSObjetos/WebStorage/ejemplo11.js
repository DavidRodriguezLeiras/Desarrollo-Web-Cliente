//Este valorEscogido nos permitira escoger entre dos valores para guardar en WebStorage
var valorEscogido = 1;
var btnCargar = document.getElementById("cargar");

//Al pulsar el boton "Cargar Datos" metemos un dato en WebStorage dependiendo de valorEscogido
btnCargar.addEventListener("click", () => {
    if (valorEscogido == 1) {
        localStorage.setItem("nombre", "Davidrl");
    } else {
        localStorage.setItem("nombre", "Manolo");
    }

    window.location.href = "./Ejemplo11-aux.html";
    
})