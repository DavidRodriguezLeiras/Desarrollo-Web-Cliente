//Declaramos una variable que contiene una string  en formato JSON
var cocheString = '{ "marca" : "renault" , "modelo": "19", "carburante":"gasolina"}';

//Convertimos usando la clase JSON la string cocheString en un objeto
var coche = JSON.parse(cocheString);
console.log(coche);

//Reconstruimos la string JSON original aplicandole JSON.stringify() al objeto

console.log(JSON.stringify(coche));