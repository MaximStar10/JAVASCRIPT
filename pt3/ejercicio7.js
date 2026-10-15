// Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones
// validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no
// cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más
// frecuente.

function repetirCaracter(caracter, veces) {
    let resultado = "";
    for (let i = 0; i < veces; i++) {
        resultado = resultado + caracter;
    }
    return resultado;
}

function contarPorEstrellas(calificaciones) {
    let contadores = [0, 0, 0, 0, 0];
    for (let i = 0; i < calificaciones.length; i++) {
        let estrella = calificaciones[i];
        let indice = estrella - 1;
        contadores[indice] = contadores[indice] + 1;
    }
    return contadores;
}

function buscarPosicionMayor(numeros) {
    let posMayor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posMayor]) {
            posMayor = i;
        }
    }
    return posMayor;
}

let calificaciones = [];

for (let i = 1; i <= 10; i++) {
    let calificacion = parseInt(prompt("Calificación " + i + ":"));

    while (isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
        alert("Calificación inválida, debe estar entre 1 y 5");
        calificacion = parseInt(prompt("Calificación " + i + ":"));
    }

    calificaciones.push(calificacion);
}

let conteo = contarPorEstrellas(calificaciones);

for (let i = 0; i < conteo.length; i++) {
    let numEstrellas = i + 1;
    let cantidad = conteo[i];
    let asteriscos = repetirCaracter("*", cantidad);
    
    if (cantidad > 0) {
        console.log("Estrellas " + numEstrellas + ": " + asteriscos + " (" + cantidad + ")");
    } else {
        console.log("Estrellas " + numEstrellas + ": (" + cantidad + ")");
    }
}

let posMasFrecuente = buscarPosicionMayor(conteo);
let estrellaMasFrecuente = posMasFrecuente + 1;

console.log("Más frecuente: " + estrellaMasFrecuente + " estrellas");