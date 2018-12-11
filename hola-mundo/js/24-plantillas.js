"use strict"

// Plantillas de Texto

var nombre = prompt("Ingresa tu Nombre");
var apellido = prompt("Ingresa tus Apellidos");

var texto = `
<h1>Hola Qué tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellido}</h3>
`;
document.write(texto);