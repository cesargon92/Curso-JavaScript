"use strict"
/*
Programa que muestre todos los números divisores de un número introducir por prompt
 */

var numero = parseInt(prompt("Ingresa un número", 1));

for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log(i + " es divisor de " + numero);
    }
}