"use strict"

// Funciones Anónimas

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){ // función de callback
    console.log("La suma es: " + dato);
},
dato => { // lo mismo que una función de callback
    console.log("La suma por dos es: " + (dato*2));
});
