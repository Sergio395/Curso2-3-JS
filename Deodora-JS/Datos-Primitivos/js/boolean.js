let numero1 = 10
let numero2 = 5
console.log(numero1 > 9); //verdadero=true
console.log(numero1 > 15);//false
console.log(numero2 < numero1);//true
// ------ Truthy & Falsy --- ver nota.txt
if({}){//5,-8,[],'hola,mundo',{}
    console.log('Este elemento es verdadero')

} else {
    console.log('Este elemento es falso ')
}

if('hola'>4){//"",0,underfined,null, NaN
    console.log('Este elemento es verdadero')

} else {
    console.log('Este elemento es falso ')
}