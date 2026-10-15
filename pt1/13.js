// Que lea N ternas de números diferentes y determine el número medio del conjunto de los
// tres números (el número medio es aquel número que no es ni mayor, ni menor).

const n = parseInt(prompt("Ingrese el número de ternas:"));
let salida = "";

for (let i = 0; i < n; i++) {
const a = parseFloat(prompt(`Terna ${i + 1} - Ingrese el primer número:`));
const b = parseFloat(prompt(`Terna ${i + 1} - Ingrese el segundo número:`));
const c = parseFloat(prompt(`Terna ${i + 1} - Ingrese el tercer número:`));

let medio;

if ((a > b && a < c) || (a < b && a > c)) {
    medio = a;
} else if ((b > a && b < c) || (b < a && b > c)) {
    medio = b;
} else {
    medio = c;
}

salida += `Terna ${i + 1}: (${a}, ${b}, ${c}) -> Número medio: ${medio}\n`;
}

alert(salida);