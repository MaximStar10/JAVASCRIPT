function obtenerMenor(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function obtenerMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let sumaPuntos = 0;
let menorPuntos = 0;
let mayorPuntos = 0;

for (let i = 1; i <= 25; i++) {
    let puntos = parseFloat(prompt("Puntos auto " + i + ":"));
    
    sumaPuntos = sumaPuntos + puntos;
    
    if (i === 1) {
        menorPuntos = puntos;
        mayorPuntos = puntos;
    } else {
        menorPuntos = obtenerMenor(menorPuntos, puntos);
        mayorPuntos = obtenerMayor(mayorPuntos, puntos);
    }
}

let promedio = calcularPromedio(sumaPuntos, 25);

console.log("Promedio: " + promedio);
console.log("Menor contaminación: " + menorPuntos);
console.log("Mayor contaminación: " + mayorPuntos);