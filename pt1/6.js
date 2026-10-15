// Unas fábricas han sido sometidas a un programa de control de contaminación para lo cual
// se efectúa una revisión de los puntos IMECA generados por la fábrica. El programa de control
// de contaminación consiste en medir los puntos IMECA que emite la fábrica en cinco días de
// una semana y si el promedio es superior a los 170 puntos entonces tendrá la sanción de
// parar su producción por una semana y una multa del 50% de las ganancias diarias cuando
// no se detiene la producción. Si el promedio obtenido de puntos IMECA es de 170 o menor
// entonces no tendrá ni sanción ni multa. Los dueños de las fábricas desean saber cuánto
// dinero perderá después de ser sometido a la revisión.

let dia1, dia2, dia3, dia4, dia5;
let gananciasdiarias;
let promedioImeca;
let perdidaTotal;

dia1 = prompt("Ingresa los puntos IMECA del día 1:");
dia2 = prompt("Ingresa los puntos IMECA del día 2:");
dia3 = prompt("Ingresa los puntos IMECA del día 3:");
dia4 = prompt("Ingresa los puntos IMECA del día 4:");
dia5 = prompt("Ingresa los puntos IMECA del día 5:");

gananciaDiaria = prompt("¿Cuánto gana la fábrica por día?");

dia1 = parseFloat(dia1);
dia2 = parseFloat(dia2);
dia3 = parseFloat(dia3);
dia4 = parseFloat(dia4);
dia5 = parseFloat(dia5);
gananciaDiaria = parseFloat(gananciaDiaria);

if(promedioImeca > 170){
    promedioImeca = (dia1 + dia2 + dia3 + dia4 + dia5) / 5;
    perdidaTotal = gananciaDiaria * 0.50;
    console.log("El promedio de puntos IMECA es: " + promedioImeca);
    console.log("La fábrica tendrá que parar su producción por una semana y pagar una multa del 50% de sus ganancias diarias.");
    console.log("La pérdida total será de: " + perdidaTotal);
} else{
    promedioImeca = (dia1 + dia2 + dia3 + dia4 + dia5) / 5;
    console.log("El promedio de puntos IMECA es: " + promedioImeca);
    console.log("La fábrica no tendrá sanción ni multa.");
}
