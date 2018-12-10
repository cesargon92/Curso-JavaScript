"use strict"

/*
Mostrar todos los números impares que hay entre 2 números introducidos por el usuario
 */

 var numero1 = parseInt(prompt("Ingrese el primer número", 0));
 var numero2 = parseInt(prompt("Ingrese el segundo número", 0));

 while(numero1 < numero2){
     if(numero1 % 2 != 0){
         console.log(numero1 + " es impar");
     }
     numero1++;
 }