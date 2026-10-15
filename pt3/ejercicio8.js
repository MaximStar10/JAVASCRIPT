// Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días
// estuvieron por encima del promedio y cuántos fueron.

function leerVentas(dias) {
    let ventas = [];
    for (let i = 0; i < dias.length; i++) {
        let venta = parseFloat(prompt("Venta del " + dias[i] + ":"));
        ventas.push(venta);
    }
    return ventas;
}

function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
        }
    return suma / numeros.length;
}

function contarMayoresQue(numeros, limite) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
            contador = contador + 1;
        }
    }
    return contador;
}

function mostrarDiasSobre(dias, ventas, limite) {
    for (let i = 0; i < dias.length; i++) {
        if (ventas[i] > limite) {
            console.log(dias[i] + ": $" + ventas[i]);
        }
    }
}

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas = leerVentas(dias);

let promedio = Math.round(calcularPromedio(ventas));

console.log("Promedio diario: $" + promedio);
console.log("Días por encima del promedio:");

mostrarDiasSobre(dias, ventas, promedio);

let totalDias = contarMayoresQue(ventas, promedio);
console.log("Total: " + totalDias + " días");