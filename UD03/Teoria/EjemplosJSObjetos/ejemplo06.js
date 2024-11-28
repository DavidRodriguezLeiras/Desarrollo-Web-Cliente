var empresa = document.getElementById("empresa");
var nombre = document.getElementById("lnombre");
var cif = document.getElementById("cif");

empresa.addEventListener("change", () => {
    if (empresa.checked) {
        cif.disabled = false;
        nombre.textContent = "Nombre: ";

    } else {
        
        cif.disabled = true;
        nombre.textContent = "Razon Social: ";
    }
});