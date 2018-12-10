"use strict"

//condicional If

var edad = 12;
var nombre = "Cesar Gonzalez";

if(edad >= 18){
    console.log(nombre + " es mayor de edad");

    if(edad <= 33){
        console.log("Eres Millenial");
    }
    else if(edad >= 70){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres millenial ni anciano");
    }
}
else{
    console.log(nombre + " es menor de edad");
}


var year = 2018;
// Negación
if(year != 2016){
    console.log("El año no es 2016. Realmente es: " + year);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}
else{
    console.log("Año no registrado");
}
