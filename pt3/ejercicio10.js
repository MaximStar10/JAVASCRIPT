// Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares,
// en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar
// "(ninguno)".

function esPar(numero) {
    return Math.abs(numero) % 2 === 0;
}

function filtrarPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
    if (esPar(numeros[i])) {
        pares.push(numeros[i]);
        }
    }
    return pares;
}

function filtrarImpares(numeros) {
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
    if (!esPar(numeros[i])) {
        impares.push(numeros[i]);
        }
    }
    return impares;
}

function unirConComas(lista) {
    if (lista.length === 0) {
    return "(ninguno)";
}

let texto = "";
for (let i = 0; i < lista.length; i++) {
    if (i === lista.length - 1) {
            texto = texto + lista[i];
        } else {
            texto = texto + lista[i] + ", ";
        }
    }
    return texto;
}

let numeros = [];

for (let i = 1; i <= 8; i++) {
    let num = parseInt(prompt("Número " + i + ":"));

    while (isNaN(num)) {
        alert("Ingresa un número entero válido");
        num = parseInt(prompt("Número " + i + ":"));
    }

    numeros.push(num);
}

let pares = filtrarPares(numeros);
let impares = filtrarImpares(numeros);

console.log("Pares (" + pares.length + "): " + unirConComas(pares));
console.log("Impares (" + impares.length + "): " + unirConComas(impares));