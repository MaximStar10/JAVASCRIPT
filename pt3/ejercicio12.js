// En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio.
// Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N:
// rotar 7 en una fila de 5 es lo mismo que rotar 2.

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

function rotarDerecha(lista, k) {
    let rotado = [];
    let n = lista.length;

    for (let i = 0; i < n; i++) {
        rotado.push(0);
    }

    for (let i = 0; i < n; i++) {
        let nuevaPosicion = (i + k) % n;
        rotado[nuevaPosicion] = lista[i];
    }

    return rotado;
}

let n = parseInt(prompt("¿Cuántas personas?"));

while (isNaN(n) || n < 1) {
    alert("Ingresa un número válido (al menos 1)");
    n = parseInt(prompt("¿Cuántas personas?"));
}

let personas = [];

for (let i = 1; i <= n; i++) {
    let nombre = prompt("Persona " + i + ":");
    personas.push(nombre);
}

let k = parseInt(prompt("¿Cuántas posiciones rotar?"));

while (isNaN(k) || k < 0) {
    alert("Ingresa un número de posiciones válido");
    k = parseInt(prompt("¿Cuántas posiciones rotar?"));
}

let filaRotada = rotarDerecha(personas, k);

console.log("Fila original: " + unirConComas(personas));
console.log("Fila rotada: " + unirConComas(filaRotada));