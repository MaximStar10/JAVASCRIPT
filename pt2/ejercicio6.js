function calcularHorasExtra(horas) {
    if (horas > 40) {
        return horas - 40;
    } else {
        return 0;
    }
}

function calcularSalarioSemanal(horas) {
    let horasExtra = calcularHorasExtra(horas);
    
    if (horasExtra > 0) {
        let salarioNormal = 40 * 12000;
        let salarioExtra = horasExtra * 15000;
        return salarioNormal + salarioExtra;
    } else {
        return horas * 12000;
    }
}

let cantidadObreros = parseInt(prompt("¿Cuántos obreros?:"));
let totalNomina = 0;

for (let i = 1; i <= cantidadObreros; i++) {
    let horas = parseFloat(prompt("Horas obrero " + i + ":"));
    let salario = calcularSalarioSemanal(horas);
    
    totalNomina = totalNomina + salario;
    
    console.log("Obrero " + i + ": " + salario);
}

console.log("Total nómina: " + totalNomina);