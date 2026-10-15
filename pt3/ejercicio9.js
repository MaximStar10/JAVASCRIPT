// Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden
// inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que
// el original quedó igual.

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

function invertir(lista) {
    let nuevoArray = [];

    for (let i = lista.length - 1; i >= 0; i--) {
        nuevoArray.push(lista[i]);
    }

    return nuevoArray;
}

let n = parseInt(prompt("¿Cuántas palabras?"));

while (isNaN(n) || n < 1) {
        alert("Ingresa un número válido (al menos 1)");
        n = parseInt(prompt("¿Cuántas palabras?"));
}

let palabras = [];

for (let i = 1; i <= n; i++) {
    let palabra = prompt("Palabra " + i + ":");
    palabras.push(palabra);
}

let palabrasInvertidas = invertir(palabras);

console.log("Original: " + unirConComas(palabras));
console.log("Invertido: " + unirConComas(palabrasInvertidas));