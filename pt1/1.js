// Calcular el total que 10 personas deben pagar en un almacén de llantas, si el precio de cada
// llanta es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o más.

let totalAlmacen = 0;

for (let i = 1; i <= 10; i++) {

    let cantidadLlantas = parseInt(prompt(`Persona ${i}: ¿Cuántas llantas compró?`));
    let precioPorLlanta;

    if (cantidadLlantas < 5) {
        precioPorLlanta = 800;
    } else {
        precioPorLlanta = 700;
    }

    let totalPersona = cantidadLlantas * precioPorLlanta;

    totalAlmacen += totalPersona;

    console.log(`Persona ${i}: Compró ${cantidadLlantas} llantas. Total a pagar: $${totalPersona}`);
}

console.log(`El total recaudado por las 10 personas es: $${totalAlmacen}`);















