function clasificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

function contarNumeros(cantidad) {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    for (let i = 1; i <= cantidad; i++) {
        let num = parseFloat(prompt("Número " + i + ":"));
        let tipo = clasificarNumero(num);

        if (tipo === "positivo") {
            positivos = positivos + 1;
        } else if (tipo === "negativo") {
            negativos = negativos + 1;
        } else {
            ceros = ceros + 1;
        }
    }

    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Ceros: " + ceros);
}

contarNumeros(20);