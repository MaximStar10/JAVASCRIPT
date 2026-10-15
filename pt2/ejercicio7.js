function tieneDescuento(kilos) {
    if (kilos > 10) {
        return true;
    } else {
        return false;
    }
}

function calcularTotalCliente(kilos, precioKilo) {
    let totalSinDescuento = kilos * precioKilo;
    
    if (tieneDescuento(kilos)) {
        let descuento = totalSinDescuento * 0.15;
        return totalSinDescuento - descuento;
    } else {
        return totalSinDescuento;
    }
}

let precioKilo = parseFloat(prompt("Precio por kilo:"));
let totalRecaudado = 0;
let clientesConDescuento = 0;

for (let i = 1; i <= 15; i++) {
    let kilos = parseFloat(prompt("Kilos cliente " + i + ":"));
    let totalPagar = calcularTotalCliente(kilos, precioKilo);
    
    totalRecaudado = totalRecaudado + totalPagar;
    
    if (tieneDescuento(kilos)) {
        clientesConDescuento = clientesConDescuento + 1;
        console.log("Cliente " + i + " paga: " + totalPagar + " (con descuento)");
    } else {
        console.log("Cliente " + i + " paga: " + totalPagar);
    }
}

console.log("Total recaudado: " + totalRecaudado);
console.log("Clientes con descuento: " + clientesConDescuento);