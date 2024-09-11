//Propiedad length
var nombre = 'Dinora '
console.log(nombre.length)//7 Dinora + espacio
console.log('Sergio Luis'.length)

// Metodos

let especialidad = '   Desarrollo Web'
console.log(especialidad)
console.log(especialidad.trim()) //quita espacios

let mayuscula = "Hola"
console.log(mayuscula.toUpperCase())

let minuscula = 'DINORA'
console.log(minuscula.toLowerCase())

let cadena1 = 'Bienvenido'
let cadena2 = 'JavaScript'

console.log(cadena1.concat(' ',cadena2))

//str.indexOf(valorBuscar, inicio)
let titulo = 'Tecnologias web: HTML, CSS, JavaScript' //1er e inicia en 1 y 2da e, en 13
console.log(titulo.indexOf('e',2))
console.log(titulo.indexOf('z'))//-1 que dice No existe z dentro de titulo

//str.lastIndexOf()-> ultimo caracter
console.log(titulo.lastIndexOf('a'))