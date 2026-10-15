// 7. 70 personas se encuentran con un problema de comprar un automóvil o un terreno, los
// cuales cuestan exactamente lo mismo. Sabe que mientras el automóvil se devalúa, con el
// terreno sucede lo contrario. Esta persona comprara el automóvil si al cabo de tres años la

// devaluación de este no es mayor que la mitad del incremento del valor del terreno. Ayúdale
// a estas personas a determinar si deben o no comprar el automóvil.

// Variables
let costoInicial;
let tasaDevaluacionAuto;
let tasaIncrementoTerreno;
let valorAutoDespues3Anios;
let valorTerrenoDespues3Anios;
let devaluacionAuto;
let incrementoTerreno;


costoInicial = parseFloat(prompt("Ingresa el costo del automóvil/terreno:"));
tasaDevaluacionAuto = parseFloat(prompt("Ingresa la tasa de devaluación anual del auto (%):"));
tasaIncrementoTerreno = parseFloat(prompt("Ingresa la tasa de incremento anual del terreno (%):"));

valorAutoDespues3Anios = costoInicial * Math.pow((1 - tasaDevaluacionAuto/100), 3);
valorTerrenoDespues3Anios = costoInicial * Math.pow((1 + tasaIncrementoTerreno/100), 3);

devaluacionAuto = costoInicial - valorAutoDespues3Anios;
incrementoTerreno = valorTerrenoDespues3Anios - costoInicial;

console.log("Devaluación del auto en 3 años: $" + devaluacionAuto.toFixed(2));
console.log("Incremento del terreno en 3 años: $" + incrementoTerreno.toFixed(2));
console.log("Mitad del incremento del terreno: $" + (incrementoTerreno/2).toFixed(2));

if (devaluacionAuto <= (incrementoTerreno / 2)) {
    console.log("✅ SÍ debe comprar el automóvil");
} else {
    console.log("❌ NO debe comprar el automóvil");
}