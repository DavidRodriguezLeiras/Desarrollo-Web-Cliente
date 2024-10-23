//Deshabilitamos la segunda hoja de estilos de la que dispone el HTML 
document.styleSheets[1].disabled = true;

//Comprobamos si la primera hoja esta deshabilitada, si lo esta, la habilitamos y deshabilitamos la otra
//si no lo esta, lo contrario.
document.getElementById("boton").addEventListener("click", () => {
    if (document.styleSheets[0].disabled) {
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
    } else {
        document.styleSheets[1].disabled = false;
        document.styleSheets[0].disabled = true;
    }
});