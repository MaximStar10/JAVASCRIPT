function generarNumeroSecreto(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function evaluarIntento(intento, secreto) {
    if (intento < secreto) {
        return "mayor";
    } else if (intento > secreto) {
        return "menor";
    } else {
        return "correcto";
    }
}

let numeroSecreto = generarNumeroSecreto(1, 100);
let intentos = 0;
let maxIntentos = 7;
let adivino = false;

while (intentos < maxIntentos && adivino === false) {
    intentos = intentos + 1;
    let intentoUsuario = parseInt(prompt("Intento " + intentos + ":"));
    let resultado = evaluarIntento(intentoUsuario, numeroSecreto);

    if (resultado === "correcto") {
        adivino = true;
        console.log("¡Adivinaste en " + intentos + " intentos!");
    } else if (resultado === "mayor") {
        console.log("El número secreto es mayor");
    } else {
        console.log("El número secreto es menor");
    }
}

if (adivino === false) {
    console.log("Agotaste tus intentos. El número secreto era " + numeroSecreto);
}