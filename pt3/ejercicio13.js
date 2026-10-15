// Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser
// idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la
// mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?

function mostrarLista(productos) {
    productos.forEach(function (producto, indice) {
        console.log((indice + 1) + ". " + producto);
    });
}

let n = parseInt(prompt("¿Cuántos productos vas a comprar?"));

if (isNaN(n) || n < 1) {
    console.log("Cantidad no válida");
} else {
    let productos = [];

    for (let i = 1; i <= n; i++) {
        let nombre = prompt("Nombre del producto " + i + ":");
        productos.push(nombre);
    }

    mostrarLista(productos);
    console.log("Total de productos: " + productos.length);
}