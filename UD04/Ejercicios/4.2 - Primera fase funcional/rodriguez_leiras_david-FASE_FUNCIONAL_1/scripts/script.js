var radioPremium = document.getElementById("premium");
var radioStandard = document.getElementById("standard");
var fieldSetPremium = document.getElementById("premiumSeleccionado");

radioPremium.addEventListener("change", () => {
    fieldSetPremium.hidden = false;
    fieldSetPremium.disabled = false;
})
radioStandard.addEventListener("change", () => {
    fieldSetPremium.hidden = true;
    fieldSetPremium.disabled = true;
})


