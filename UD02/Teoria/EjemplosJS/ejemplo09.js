var persona = {
    nombre: "Uxia",
    apellidos: "Pereira Seivane",
    edad: 30,
    altura: 165,
    peso: 60,
    ciudad: "Santiago de Compostela"
};

//Acceso mediante operador
console.log(persona.nombre + " " + persona.apellidos);
//Acceso mediante el operador asociativo []
console.log("Edad: " + persona["edad"] + " años.");

//Extraemos las claves del objeto persona
var clavesPersona = Object.keys(persona);
console.log(clavesPersona);

for (campo of clavesPersona) {
    console.log(campo+": " + persona[campo]);
}