// Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la
// cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el
// primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km
// y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en
// cobertura".

function obtenerEnvioGratis(distancias) {
    let gratis = distancias.filter(function (distancia) {
        return distancia <= 3;
    });
    return gratis;
}

function contarConEnvio(distancias) {
    let pagan = distancias.filter(function (distancia) {
        return distancia > 3 && distancia <= 10;
    });
    return pagan.length;
}

function buscarPrimeroFuera(distancias) {
    let fuera = distancias.find(function (distancia) {
        return distancia > 10;
    });
    return fuera;
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

let n = parseInt(prompt("¿Cuántos pedidos?"));

if (isNaN(n) || n < 1) {
    console.log("Cantidad de pedidos no válida");
} else {
    let distancias = [];

    for (let i = 1; i <= n; i++) {
        let distancia = parseFloat(prompt("Distancia " + i + ":"));

        if (isNaN(distancia) || distancia < 0) {
        console.log("Distancia no válida");
        } else {
        distancias.push(distancia);
        }
    }

    if (distancias.length === n) {
        let envioGratis = obtenerEnvioGratis(distancias);
        let cantidadPagan = contarConEnvio(distancias);
        let primeroFuera = buscarPrimeroFuera(distancias);

        console.log("Envío gratis (" + envioGratis.length + "): " + unirConComas(envioGratis));
        console.log("Pagan envío: " + cantidadPagan);

        if (primeroFuera !== undefined) {
            console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
        } else {
            console.log("Todos los pedidos están en cobertura");
        }
    }
}