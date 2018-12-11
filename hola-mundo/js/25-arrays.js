"use strict"

// Arrays, Arreglos, Matrices

var nombre = "César González";
var nombres = ["César González", "Juan Pérez", "José Arriagada", 52, true];

var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#");

lenguajes.forEach((elemento, index)=>{
    console.log(index + " - " + elemento);
});