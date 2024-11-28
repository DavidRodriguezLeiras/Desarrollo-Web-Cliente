var aux = 3;

//Ejemplo de while que va descontando
while (aux > 0) {
    console.log(aux);
    aux--;
}
// Ejemplo do-while , incrementa aux hasta que valga 3
do {
    console.log(aux);
    aux++;
} while (aux <= 3);

//Ejemplo de bucle for
for (let i = 1; i < 5; i++){
    console.log(i);
}

//for con iterador externo
var i = 1;
for (; i <=5 ;){
    console.log(i);
    i++;
}