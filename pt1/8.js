// 8. En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
// dependerá del número de computadoras que compre. Si las computadoras son menos de
// cinco se les dará un 10% de descuento sobre el total de la compra; si el número de
// computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de
// descuento; y si son 10 o más se les da un 40% de descuento. El precio de cada computadora
// es de $11,000

function calcularTotal(cantidad) {
const PRECIO_UNITARIO = 11000;
const subtotal = cantidad * PRECIO_UNITARIO;
let descuento = 0;

if (cantidad < 5) {
    descuento = 0.10;
} else if (cantidad < 10) {
    descuento = 0.20;
} else {
    descuento = 0.40;
}

const montoDescuento = subtotal * descuento;
const totalAPagar = subtotal - montoDescuento;

return {
    cantidad,
    subtotal,
    descuentoAplicado: `${descuento * 100}%`,
    montoDescuento,
    totalAPagar
};
}
