/*JavaScript es de tipado dinámico:
No defino tipo de variable y puedo cambiar el tipo al cambiar el valor de la variable
(Java es de tipado estático: debo definir el tipo de variable y no puedo poner un valor
de distinto tipo Ej String copia="Es copia"; luego texto=42; Da Error)
*/
let copia = 'Es copia';//String->Number (JS tipado dinámico)
copia=42;//Number
console.log(copia);//42 

let numero = 42;
let nombre = "Hola Mundo";
let verdadero = true;
let undef;
let nula = null;

console.log(typeof(numero))//number
console.log(typeof nombre)//string
console.log(typeof verdadero)//boolean
console.log(typeof undef)//undefined
console.log(typeof nula)//object = null es la ausencia de un objeto(http://deveolper.mozilla.or)

nombre=53; //string->number
console.log(nombre)//"Hola Mundo"->53