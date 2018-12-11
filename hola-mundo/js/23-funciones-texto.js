"use strict"

// Transformar textos

var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
dato = texto1.toLowerCase();
dato = texto2.toUpperCase();

console.log(dato);

// Calcular longitud
var nombre = "César González";
console.log(nombre.length);

// Concatenar
//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" ", texto2);
console.log(textoTotal);

var busqueda = texto1.search("curso"); // igual que el indexof
busqueda = texto1.match("curso"); // devuelve array con info de la coincidencia
busqueda = texto1.substr(14, 5) // desde el indice 14, obtener 5 caracteres
busqueda = texto1.charAt(44); // obtiene la letra de la posición indicada
busqueda = texto1.startsWith("Bi"); // obtiene true o false, dependiendo de si el string comienza con lo indicado
busqueda = texto1.endsWith("JS"); // obtiene true o false, dependiendo de si el string termina con lo indicado
busqueda = texto1.includes("al"); // busca si existe una cadena dentro de otra CASE Sensitive
busqueda = texto1.replace("JS", "PHP") // reemplaza una cadena por otra
busqueda = texto1.slice(14) // recorta string según index indicado
busqueda = texto1.split(" "); // separa según una cadena indicada, obteniendo un array con todas las cadenas obtenidas
busqueda = texto1.trim(); // elimina los espacios al comienzo y al final de una cadena
console.log(busqueda);

