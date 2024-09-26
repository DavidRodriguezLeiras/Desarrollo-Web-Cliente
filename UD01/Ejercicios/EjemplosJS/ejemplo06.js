var num = 25;
var num2 = "25";
if (num == 25) {
    console.log("El numero es " + num);
}
if (num === num2) {///=== compara valor y tipo por lo tanto , esto dara False
    console.log("El numero es el mismo");
} else {
    console.log("El numero es distinto(valor o tipo)"); 
}

//Ejemplo de if en formato shorthand usando el operador ?
(num == num2) ? console.log("El numero es " + num) : console.log("No se cual es el numero");

//Ejemplo de switch-case sin comportamiento fall-through
var entry = '2';
switch (entry) {
    case '1':
        console.log("La entrada es 1");
        entry = '2';
        break;
    case '2':
        console.log("La entrada es 2");
        entry = '3';
        break;
    case '3':
        console.log("La entrada es 3");
        entry = '4';
        break;
    default:
        console.log("La entrada no existe ");
}
//Ejemplo de switch-case con comportamiento fall-through
var entradas = 2;
switch (entradas) {
    case 1:
        console.log("La entrada es 1");
        entradas = 2;
    case 2:
        console.log("La entrada es 2");
        entradas = 3;
    case 3:
        console.log("La entrada es 3");
        entradas = 4;
    case 4:
        console.log("La entrada es 4");
        entradas = 5;
    default:
        console.log("La entrada no existe ");
}