// Leer las notas de 5 aprendices en escala de 0 a 5. Si una nota está fuera del rango, se vuelve a
// pedir hasta que sea válida. Mostrar todas las notas separadas por comas, el promedio con un
// decimal y si el grupo aprobó (promedio mayor o igual a 3.0).

function leerNotaValida(numero) {
    let nota = parseFloat(prompt("Nota " + numero + ":"));

while (isNaN(nota) || nota < 0 || nota > 5) {
    alert("Nota inválida, debe estar entre 0 y 5");
    nota = parseFloat(prompt("Nota " + numero + ":"));
}

    return nota;
}

function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma / numeros.length;
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

let notas = [];

for (let i = 1; i <= 5; i++) {
    let nota = leerNotaValida(i);
    notas.push(nota);
}

let promedio = calcularPromedio(notas);

console.log("Notas: " + unirConComas(notas));
console.log("Promedio: " + promedio.toFixed(1));

if (promedio >= 3.0) {
    console.log("El grupo aprobó");
} else {
    console.log("El grupo no aprobó");
}