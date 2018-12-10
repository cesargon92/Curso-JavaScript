"use strict"

/*
Programa que pida dos números y que nos diga cuál es el mayor, el menor o si son iguales
PLUS: Si los números no son números o son menores o iguales a 0, que vuelva a pedirlos
 */

 var numero1 = "";
 var numero2 = "";

 do{
    numero1 = parseInt(prompt("Introduce el primer número", 0));
 }
 while(isNaN(numero1) || numero1 <= 0)

 do{
    numero2 = parseInt(prompt("Introduce el segundo número", 0));
 }
 while(isNaN(numero2) || numero2 <= 0)

 if(numero1 > numero2){
     alert("El primer número es mayor que el segundo");
 }
 else if(numero2 > numero1){
    alert("El segundo número es mayor que el primero");
 }
 else{
    alert("Los números son iguales");
 }