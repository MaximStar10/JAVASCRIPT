// Un proveedor de estéreos ofrece un descuento del 10% sobre el precio sin IVA, de algún
// aparato si este cuesta $2000 o más. Además, independientemente de esto, ofrece un 5% de
// descuento si la marca es “NOSY”. Determinar cuánto pagaran, con IVA incluido, los clientes
// por la compra de su aparato.

const precio = parseFloat(prompt("Ingrese el precio sin IVA del estéreo:"));
const marca = prompt("Ingrese la marca del estéreo:").toUpperCase();

let descuento = 0;

if (precio >= 2000) {
    descuento += 0.10;
}

if (marca === "NOSY") {
    descuento += 0.05;
}

const precioConDescuento = precio * (1 - descuento);
const precioConIVA = precioConDescuento * 1.16;

alert(`Precio sin IVA: $${precio.toFixed(2)}\nDescuento aplicado: ${(descuento * 100).toFixed(0)}%\nPrecio con descuento: $${precioConDescuento.toFixed(2)}\nTotal con IVA incluido: $${precioConIVA.toFixed(2)}`);