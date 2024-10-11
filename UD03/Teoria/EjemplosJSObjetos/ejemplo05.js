var provincias = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
var select = document.getElementById("provincias");
document.getElementById("boton").addEventListener("click", () => {
    var opcion = document.createElement("option");
    opcion.value = "";
    opcion.textContent = "";
    select.appendChild(opcion);

    provincias.forEach((provincia) => {
        
            opcion = document.createElement("option");
            opcion.value = provincia;
            opcion.textContent = provincia;
            select.appendChild(opcion); 
    
    });
})

