console.log(typeof ("Hola")); //Este devuelve String
console.log(typeof (2.44));//Este devuelve number
console.log(typeof (5 + 2));////Este devuelve number
console.log(typeof (5 * 2));//Este devuelve number
console.log(typeof ('5' + 2)); //Este devuelve String
console.log(typeof ('5' * 2));//Este devuelve number
console.log(typeof ('B' * 15)); //Aunque aqui el resultado es NaN(not a number), este valor es un numero
console.log(typeof (true));//Este devuelve boolean
console.log(typeof ([1, 2])); //Este devuelve object
console.log(typeof ({ nombre: "Paco", edad: 30 })); //Este devuelve object
console.log(typeof (new Date())); // Este devuelve un object
console.log(typeof (function () { })); // Este devuelve function
console.log(typeof (cosa));// Este devuelve undefined
console.log(typeof (null)); // Este devuelve objeto
console.log(typeof (10 + true)); // Este devuelve un number,seria lo mismo que sumar 10+1 ya que true se representa como un 1
console.log((new String(new Date()))); //Convierte un objeto a su representacion en string , este es e ToString de JS
console.log(typeof (parseInt("256")));
console.log(parseInt("12.5"));
console.log(parseFloat ("12.5"));