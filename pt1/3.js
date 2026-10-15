// Calcular el número de pulsaciones que deben tener N personas por cada 10 segundos de
// ejercicio aeróbico; la fórmula que se aplica cuando el sexo es femenino es:
// num.pulsaciones = (220 - edad)/10,
// Y si el sexo es masculino:
// num. pulsaciones = (210 - edad)/10


let n = parseInt(prompt("¿Cuántas personas desea evaluar?"));

for (let i = 1; i <= n; i++) {
    let edad = parseInt(prompt(`Persona ${i}: Ingrese la edad:`));
    let sexo = prompt(`Persona ${i}: Ingrese el sexo (F para femenino, M para masculino):`).toUpperCase();
    
    let pulsaciones = 0;

    if (sexo === 'F') {
        pulsaciones = (220 - edad) / 10;
    } else if (sexo === 'M') {
        pulsaciones = (210 - edad) / 10;
    } else {
        console.log(`Persona ${i}: Sexo no válido ingresado.`);
        continue; 
    }

    console.log(`Persona ${i} (${sexo}, ${edad} años): Debe tener ${pulsaciones} pulsaciones por cada 10 segundos.`);
}
