const n = parseInt(prompt("Ingrese el número de personas:"));
const precioKilo = parseFloat(prompt("Ingrese el precio por kilo de manzanas:"));
const resultados = [];

for (let i = 0; i < n; i++) {
const kilos = parseFloat(prompt(`Ingrese los kilos que compra la persona ${i + 1}:`));
let descuento;

if (kilos <= 2) {
    descuento = 0;
} else if (kilos <= 5) {
    descuento = 0.10;
} else if (kilos <= 10) {
    descuento = 0.15;
} else {
    descuento = 0.20;
}

const subtotal = kilos * precioKilo;
const total = subtotal * (1 - descuento);
resultados.push({ persona: i + 1, kilos, descuento, total });
}

let salida = "";
resultados.forEach(r => {
  salida += `Persona ${r.persona}: ${r.kilos} kg, descuento ${(r.descuento * 100).toFixed(0)}%, total a pagar: $${r.total.toFixed(2)}\n`;
});

alert(salida);