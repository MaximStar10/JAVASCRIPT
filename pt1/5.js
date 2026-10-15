// En una escuela la matrícula de los 38 alumnos se determina según el número de materias
// que cursan. El costo de todas las materias es el mismo. Además, se ha establecido un
// programa para estimular a los alumnos, el cual consiste en lo siguiente: si el promedio
// obtenido por un alumno en el último periodo es mayor o igual que 9, se le hará un descuento
// del 30% sobre la matrícula y no se le cobrara IVA; si el promedio obtenido es menor que 9
// deberá pagar la matrícula completa, la cual incluye el 10% de IVA. Obtener cuanto debe
// pagar cada alumno.


let costoMateria = parseFloat(prompt("Ingrese el costo fijo por materia:"));

for (let i = 1; i <= 38; i++) {
    let numMaterias = parseInt(prompt(`Alumno ${i}: Ingrese el número de materias que cursa:`));
    let promedio = parseFloat(prompt(`Alumno ${i}: Ingrese el promedio del último periodo:`));
    
    let subtotal = numMaterias * costoMateria;
    let totalPagar = 0;

    if (promedio >= 9) {
        totalPagar = subtotal * 0.70;
    } else {
        totalPagar = subtotal * 1.10;
    }

    console.log(`Alumno ${i}: Total a pagar = $${totalPagar}`);
}
