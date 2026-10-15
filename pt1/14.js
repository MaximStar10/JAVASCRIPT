// Desarrolle un algoritmo que lea el valor del pasaje y el número de pasajeros que abordarán
// varios microbuses. Calcular el valor total a pagar por cada uno.

const valorPasaje = parseFloat(prompt("Ingrese el valor del pasaje:"));
const n = parseInt(prompt("Ingrese el número de microbuses:"));
let salida = "";
let totalGeneral = 0;

for (let i = 0; i < n; i++) {
const pasajeros = parseInt(prompt(`Ingrese el número de pasajeros del microbús ${i + 1}:`));
const total = valorPasaje * pasajeros;
totalGeneral += total;
salida += `Microbús ${i + 1}: ${pasajeros} pasajeros -> Total a pagar: $${total.toFixed(2)}\n`;
}

salida += `\nTotal general: $${totalGeneral.toFixed(2)}`;
alert(salida);