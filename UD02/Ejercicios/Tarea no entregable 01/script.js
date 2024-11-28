var texto2 = document.getElementById('texto2').innerHTML;

function textoOver() {
    document.getElementById("texto2").innerText = "Texto cambiado temporalmente";
}

function textOut() {
    document.getElementById("texto2").innerText = texto2;
}

function cambiarTexto(){
    document.getElementById("texto1").innerText = "Texto cambiado permanentemente";
};