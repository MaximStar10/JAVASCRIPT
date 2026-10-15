// Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que
// apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido
// includes, indexOf y Set.

function existeEnLista(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valor) {
        return true;
        }
    }
    return false;
}

function eliminarRepetidos(numeros) {
    let sinRepetir = [];
    for (let i = 0; i < numeros.length; i++) {
        if (!existeEnLista(sinRepetir, numeros[i])) {
        sinRepetir.push(numeros[i]);
        }
    }
    return sinRepetir;
}

function unirConComas(lista) {
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

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Número " + i + ":"));

    while (isNaN(num)) {
        alert("Ingresa un número entero válido");
        num = parseInt(prompt("Número " + i + ":"));
    }

    numeros.push(num);
}

let sinRepetidos = eliminarRepetidos(numeros);
let eliminados = numeros.length - sinRepetidos.length;

console.log("Sin repetidos: " + unirConComas(sinRepetidos));
console.log("Se eliminaron " + eliminados + " repetidos");