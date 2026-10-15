// Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la
// diferencia entre ambos.

function leerVentas(dias) {
    let ventas = [];
    for (let i = 0; i < dias.length; i++) {
    let venta = parseFloat(prompt("Venta del " + dias[i] + ":"));
    ventas.push(venta);
    }
    return ventas;
}

function buscarPosicionMayor(numeros) {
    let posMayor = 0;
    for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[posMayor]) {
        posMayor = i;
        }
    }
    return posMayor;
}

function buscarPosicionMenor(numeros) {
    let posMenor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[posMenor]) {
            posMenor = i;
        }
    }
return posMenor;
}

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas = leerVentas(dias);

let posMejor = buscarPosicionMayor(ventas);
let posPeor = buscarPosicionMenor(ventas);

let mejorVenta = ventas[posMejor];
let peorVenta = ventas[posPeor];
let diferencia = mejorVenta - peorVenta;

console.log("Mejor día: " + dias[posMejor] + " ($" + mejorVenta + ")");
console.log("Peor día: " + dias[posPeor] + " ($" + peorVenta + ")");
console.log("Diferencia: $" + diferencia);