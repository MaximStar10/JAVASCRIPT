// Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más
// IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA.
// Escribe también la versión con for en otra función y comprueba que las dos den el mismo
// resultado.

function calcularConIva(precio) {
  return Math.round(precio * 1.19);
}

function aplicarIvaConMap(precios) {
    let conIva = precios.map(function (precio) {
        return calcularConIva(precio);
        });
    return conIva;
}

function aplicarIvaConFor(precios) {
    let conIva = [];
    for (let i = 0; i < precios.length; i++) {
        let precioFinal = calcularConIva(precios[i]);
        conIva.push(precioFinal);
        }
    return conIva;
}

function calcularTotal(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
        }
    return suma;
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

let n = parseInt(prompt("¿Cuántos productos?"));

if (isNaN(n) || n < 1) {
    console.log("Cantidad no válida");
} else {
    let preciosSinIva = [];

    for (let i = 1; i <= n; i++) {
        let precio = parseFloat(prompt("Precio " + i + ":"));

        if (isNaN(precio) || precio < 0) {
            console.log("Precio no válido");
        } else {
            preciosSinIva.push(precio);
        }
    }

    if (preciosSinIva.length === n) {
        let preciosConIvaMap = aplicarIvaConMap(preciosSinIva);
        let totalConIva = calcularTotal(preciosConIvaMap);

        console.log("Sin IVA: " + unirConComas(preciosSinIva));
        console.log("Con IVA: " + unirConComas(preciosConIvaMap));
        console.log("Total con IVA: $" + totalConIva);
    }
}