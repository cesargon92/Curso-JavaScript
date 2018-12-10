'use strict'

//pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero);

if(true){
    numero = 50;
    console.log(numero);
}

console.log(numero);

//prueba con let (variable solo de bloque)
var texto = "Curso JS";
console.log(texto);

if(true){
    let texto = "Curso Laravel 5";
    console.log(texto);
}

console.log(texto);
