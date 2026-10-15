// 9. En un almacén se ha establecido una promoción de las llantas marca “Ponchadas”, dicha
// promoción consiste en lo siguiente: Si se compran menos de cinco llantas el precio es de
// $300 cada una, de $250 si se compran de cinco a 10 y de $200 si se compran mas de 10.
// Obtener la cantidad de dinero que N personas tienen que pagar por cada una de las llantas
// que compra y la que tiene que pagar por el total de la compra.

const n = parseInt(prompt("Ingrese el número de personas:"));
const resultados = [];

for (let i = 0; i < n; i++) {
const cantidad = parseInt(prompt(`Ingrese la cantidad de llantas que compra la persona ${i + 1}:`));
let precio;

if (cantidad < 5) {
    precio = 300;
} else if (cantidad <= 10) {
    precio = 250;
} else {
    precio = 200;
}

const total = cantidad * precio;
resultados.push({ persona: i + 1, cantidad, precio, total });
}

let salida = "";
resultados.forEach(r => {
salida += `Persona ${r.persona}: ${r.cantidad} llantas a $${r.precio} cada una, total a pagar: $${r.total}\n`;
});

alert(salida);