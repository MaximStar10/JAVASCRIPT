function contarDivisores(numero) {
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores = divisores + 1;
        }
    }
    return divisores;
}

function esPrimo(numero) {
    if (contarDivisores(numero) === 2) {
        return true;
    } else {
        return false;
    }
}

let limite = parseInt(prompt("Límite:"));
let cantidadPrimos = 0;

for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
        console.log(i);
        cantidadPrimos = cantidadPrimos + 1;
    }
}

console.log("Cantidad de primos: " + cantidadPrimos);