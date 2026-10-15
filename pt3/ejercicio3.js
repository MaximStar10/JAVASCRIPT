// Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el del
// medio. Si N es par hay dos del medio: mostrar ambos.

function leerNumeros(cantidad) {
    let numeros = [];
    for (let i = 1; i <= cantidad; i++) {
    let num = parseFloat(prompt("Número " + i + ":"));
    numeros.push(num);
    }
    return numeros;
}

function obtenerUltimo(numeros) {
    return numeros[numeros.length - 1];
}

function mostrarMedio(numeros) {
    let cantidad = numeros.length;
    let mitad = Math.floor(cantidad / 2);

    if (cantidad % 2 === 0) {
        console.log("Del medio: " + numeros[mitad - 1] + " y " + numeros[mitad]);
    } else {
        console.log("Del medio: " + numeros[mitad]);
    }
}

let n = parseInt(prompt("¿Cuántos números?"));

while (isNaN(n) || n < 1) {
    alert("Ingresa un número válido (al menos 1)");
    n = parseInt(prompt("¿Cuántos números?"));
}

let misNumeros = leerNumeros(n);

console.log("Primero: " + misNumeros[0]);
console.log("Último: " + obtenerUltimo(misNumeros));
mostrarMedio(misNumeros);