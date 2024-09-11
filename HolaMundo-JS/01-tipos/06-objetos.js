//Object no es primitivo es tipo de referencia
/* Cuando los objetos son almacenados en la memoria RAM
en realidad se guarda una dirección de memoria que apunta
hacia donde eventualmente estará guardado el objeto. 
Esto es así porque ocurre en heap-RAM expandible,dinámica,más lenta que
stack-RAM fija,rápida(almacena los datos primitivos)
Ej Objeto Lapiz: color,longitud,fabricante, peso 
Ej2 Objeto Persona: nombre, apellido, edad
*/
//Personajes de TV
let nombre = 'Tanjiro';
let anime = 'Demon slayer';
let edad = 16;

let personaje = {}; // objeto literal
console.log(personaje)//>{} es un objeto vacio y si abrimos la flecha dice->[[Prototype]]: Object

personaje = {
    nombre: "Tanjiro", //´llave: "valor" o par llave-valor (en JS es llave o propiedad//en otros es atributo)
    anime: "Demon slayer",
    edad: 16,

};
console.log(personaje)//muestra todo el detalle del objeto, si quiero solo una propiedad sería:
console.log(personaje.nombre)//Tanjiro
console.log(personaje['anime'])//Demon Slayer - otra forma de mostrar la propiedad (¿Cómo modifico la propiedad?)

personaje.edad = 13; //es la más usada
console.log(personaje.edad)//13
//Pero cunado no conocemos qué propiedades tiene el objeto->iterar
let llave = 'edad'; 
personaje[llave] = 26;
console.log(personaje.edad)//26

//Ahora quiero eliminar una propiedad
delete personaje.anime;
console.log(personaje)//muestra el objeto y ya no figura la propiedad anime

