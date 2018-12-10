"use strict"

/*
Utilizando un bucle, mostrar la suma y la media de los números ingresados 
hasta introducir un número negativo y ahí mostrar el resultado
 */

 var suma = 0;
 var contador = 0;

do{
    var numero = parseInt(prompt("Introduce algún número", 0));
    if(isNaN(numero)){
        numero = 0;
    }
    else if(numero >= 0){
        suma = suma + numero;
        contador++;
    }
}while(numero >= 0)

alert("La suma total es: " + suma);
alert("El promedio de los números ingresados es: " + (suma / contador))