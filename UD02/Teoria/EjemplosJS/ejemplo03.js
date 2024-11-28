//Declaramos una variable global sin inicializar y otra inicializada
var num1,num2=20;

//inicializamos variable numerica
num2=60;

//Declaramos una variable global y tomamos el valor de un prompt
//var texto= prompt("Introduce un texto:" ,'');

//console.log(texto);
console.log(num1);

//Creamos un array con varios elementos de tipo string 
var puestos = ["Programador/a", "Tecnico/a", "Administrativo/a", "Manager"];
puestos[4] = "Jefe";
puestos[7] = "bedel";// Creamos un elemento en la posicion 7 , por lo tanto dejando huecos en el array
console.log(puestos);
console.log(typeof (puestos));
console.log(puestos.length);

var nums = [1, 2, 3, 4, 5];

//Declaramos una funcion auxiliar que actuara como iterador del array
function imprimirDecenas(i) {
    console.log(i * 10);
}

//Recorremos el array de numeros pasandole la funcion auxiliar como iterador
nums.forEach(imprimirDecenas);

//Extraemos y imprimimos el ultmimo elemento del array de puestos
console.log(puestos.pop()); //Sacamos el ultimo elemento del array
console.log(puestos[-1]);

//Imprimimos los elementos del array de puestos utilizando una cadena como separador
console.log(puestos.join("-"));

//Extraer el primer elemento del array
console.log(puestos.shift());
console.log(puestos);

//Añadimos un elemento por el final al array de puestos
puestos.push("Programador/a");
//Añadimos un elemento por el principio al array de puestos
puestos.unshift("Analista");
console.log(puestos);
//Ordenamos alfabeticamente los elementos del array
puestos.sort();
console.log(puestos);

//Eliminamos un elemento directamente por posicion
delete puestos[1];
console.log(puestos);

//Añadimos a partir de la posicion 2, sobreescribiendo un elemento por el valor "Auxiliar"
puestos.splice(2, 1, "Auxiliar");
console.log(puestos);

//Añadimos a partir de la posicion 2, añadiendo un elemento por el valor "Auxiliar"
puestos.splice(2, 0, "Auxiliar");
console.log(puestos);

//Eliminamos un elemento a partir de la posicion 6
puestos.splice(6, 1);
console.log(puestos);

//Creamos subarray del array de puestos, el primer parametro es la posicion de inicio
//incluida y el segundo es la ultima, no incluida
var inicio = puestos.slice(0, 3);
var fin = puestos.slice(3, puestos.length);

console.log(inicio);
console.log(fin);














