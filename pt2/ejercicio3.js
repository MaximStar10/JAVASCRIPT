function convertirAKelvin(celsius) {
    return celsius + 273.15;
}

function convertirAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let dias = parseInt(prompt("¿Cuántos días?:"));
let sumaTemperaturas = 0;

for (let i = 1; i <= dias; i++) {
    let celsius = parseFloat(prompt("Temperatura día " + i + " (°C):"));
    let kelvin = convertirAKelvin(celsius);
    let fahrenheit = convertirAFahrenheit(celsius);
    
    sumaTemperaturas = sumaTemperaturas + celsius;
    
    console.log("Día " + i + ": " + celsius + " °C = " + kelvin + " K = " + fahrenheit + " °F");
}

let promedio = calcularPromedio(sumaTemperaturas, dias);
console.log("Promedio: " + promedio + " °C");