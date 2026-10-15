function multiplicar(multiplicando, multiplicador) {
    return multiplicando * multiplicador;
}

function mostrarTabla(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = multiplicar(numero, i);
        console.log(numero + " x " + i + " = " + resultado);
    }
}

let numero = parseInt(prompt("Número:"));
mostrarTabla(numero);