// En un supermercado se hace una promoción, mediante la cual los clientes obtienen un
// descuento dependiendo de un número que se escoge al azar. Si el numero escogido es
// menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a 74
// el descuento es del 20%. Obtener cuánto dinero se le descuenta. Hacer el ciclo mientras el
// número escogido sea diferente de 0.

let totalAlmacen = 0;
let totalCompra = parseFloat(prompt("Ingrese el total de la compra (o 0 para salir):"));

if (totalCompra !== 0) {
    let numeroAzar = parseInt(prompt("Ingrese el número escogido al azar (0 para finalizar):"));

    while (numeroAzar !== 0) {
        let porcentajeDescuento = numeroAzar < 74 ? 0.15 : 0.20;
        let descuento = totalCompra * porcentajeDescuento;
        let totalPagar = totalCompra - descuento;

        console.log(`Descuento aplicado: $${descuento} (${porcentajeDescuento * 100}%)`);
        console.log(`Total a pagar: $${totalPagar}`);

        totalCompra = parseFloat(prompt("Ingrese el total de la siguiente compra:"));
        numeroAzar = parseInt(prompt("Ingrese el nuevo número escogido al azar (0 para finalizar):"));
    }
}