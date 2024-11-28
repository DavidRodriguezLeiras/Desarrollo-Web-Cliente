//Recojo las referencias al html
var radioPremium = document.getElementById("premium");
var radioStandard = document.getElementById("standard");
var fieldSetPremium = document.getElementById("premiumSeleccionado");

//Evento cuando pulsamos sobre el radio de "Premium"
radioPremium.addEventListener("change", () => {
    fieldSetPremium.style.height = fieldSetPremium.scrollHeight + "px";
    fieldSetPremium.disabled = false; //Habilitamos los campos
    fieldSetPremium.style.opacity = 1; //Ponemos su opacidad en 1
    fieldSetPremium.style.visibility = "visible"; //Hacemos al elemento visible
})

radioStandard.addEventListener("change", () => {
    fieldSetPremium.style.height = "0px";
    fieldSetPremium.disabled = true; // Deshabilitamos los elementos
    fieldSetPremium.style.opacity = 0; //Ponemos su opacidad en 1
    fieldSetPremium.style.visibility = "hidden"; //Ocultamos los elementos cambiando su estilo visibility
})

