//Recuperamos el valor guardado en localStorage con clave "nombre"
var valorGuardado = localStorage.getItem("nombre");

document.getElementById("texto").textContent = valorGuardado;