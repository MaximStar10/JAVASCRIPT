function calcularInteres(saldo, porcentaje) {
    return saldo * (porcentaje / 100);
}

function mostrarInversion(capital, meses) {
    let saldoActual = capital;

    for (let i = 1; i <= meses; i++) {
        let interes = calcularInteres(saldoActual, 2);
        saldoActual = saldoActual + interes;
        console.log("Mes " + i + ": " + saldoActual);
    }

    let gananciaTotal = saldoActual - capital;
    console.log("Ganancia total: " + gananciaTotal);
}

let capitalInicial = parseFloat(prompt("Capital inicial:"));
let cantidadMeses = parseInt(prompt("Número de meses:"));

mostrarInversion(capitalInicial, cantidadMeses);