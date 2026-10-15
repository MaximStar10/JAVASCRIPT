// Pedir cuántos productos se van a comprar, leer el nombre de cada uno y guardarlos en un
// array. Al final mostrar la lista numerada desde 1 y el total de productos.

let cantidad = prompt("¿Cuántos productos vas a comprar?");
let productos = [];

for (let i = 0; i < cantidad; i++) {
    let producto = prompt("Ingresa el nombre del producto:");
    productos.push(producto);
}

console.log("Lista de productos:");

for (let i = 0; i < productos.length; i++) {
    console.log((i + 1) + ". " + productos[i]);
}

console.log("Total de productos: " + productos.length);
