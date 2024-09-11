let animales = ['chanchito', 'caballo']; // arreglo o colleccion (collection) 
console.log(animales);//>['chanchito', 'caballo'] si despliego 0:'chanchito' 1:'caballo 
 
                                                       // length: 2
console.log(animales[0]);//'chanchito'

animales[2] = "dragón";
console.log(animales);//['chanchito', 'caballo', "dragón"]

animales[10] = 'Pez';
console.log(animales);//[idem, empty x 7,'Pez']->length:11
console.log (animales[7]);//undefined
console.log(typeof animales);//object (acceso a muchos métodos)
console.log(animales.length);//11

