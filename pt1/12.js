// Una institución educativa estableció un programa para estimular a los alumnos con buen
// rendimiento académico y que consiste en la siguiente tabla:
//  Si el promedio es de 9.5 o más y el alumno es de preparatoria, entonces este podrá
// cursar 55 unidades y se le hará un 25% de descuento.
//  Si el promedio es mayor o igual a 9 pero menor que 9.5 y el alumno es de
// preparatoria, entonces este podrá cursar 50 unidades y se le hará un 10% de
// descuento.
//  Si el promedio es mayor que 7 y menor que 9 y el alumno es de preparatoria, este
// podrá cursar 50 unidades y no tendrá ningún descuento.
//  Si el promedio es de 7 o menor, el número de materias reprobadas es de 0 a 3 y el
// alumno es de preparatoria, entonces podrá cursar 45 unidades y no tendrá
// descuento.
//  Si el promedio es de 7 o menor, el número de materias reprobadas es de 4 o más y
// el alumno es de preparatoria, entonces podrá cursar 40 unidades y no tendrá ningún
// descuento.
//  Si el promedio es mayor o igual a 9.5 y el alumno es de profesional, entonces podrá
// cursar 55 unidades y se le hará un 20% de descuento.
//  Si el promedio es menor de 9.5 y el alumno es de profesional, entonces podrá cursar
// 55unidades y no tendrá descuento

// Obtener el total que tendrá que pagar un alumno si la matrícula para alumnos de profesional
// es de $80.000 por cada cinco unidades y para alumnos de preparatoria es de $50.000 por
// cada cinco unidades.

const nombre = prompt("Ingrese el nombre del alumno:");
const tipo = prompt("Ingrese el tipo de alumno (preparatoria/profesional):").toLowerCase();
const promedio = parseFloat(prompt("Ingrese el promedio del alumno:"));
const reprobadas = parseInt(prompt("Ingrese el número de materias reprobadas:"));

let unidades = 0;
let descuento = 0;
let costoPorCinco = 0;

if (tipo === "preparatoria") {
costoPorCinco = 50000;
if (promedio >= 9.5) {
    unidades = 55;
    descuento = 0.25;
} else if (promedio >= 9) {
    unidades = 50;
    descuento = 0.10;
} else if (promedio > 7) {
    unidades = 50;
    descuento = 0;
} else if (reprobadas <= 3) {
    unidades = 45;
    descuento = 0;
} else {
    unidades = 40;
    descuento = 0;
}
} else {
    costoPorCinco = 80000;
if (promedio >= 9.5) {
    unidades = 55;
    descuento = 0.20;
} else {
    unidades = 55;
    descuento = 0;
}
}

const costoBase = (unidades / 5) * costoPorCinco;
const total = costoBase * (1 - descuento);

alert(`Alumno: ${nombre}\nTipo: ${tipo}\nUnidades a cursar: ${unidades}\nDescuento: ${(descuento * 100).toFixed(0)}%\nTotal a pagar: $${total.toFixed(2)}`);