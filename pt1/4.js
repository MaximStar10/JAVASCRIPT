// Una compañía de seguros está abriendo un departamento de finanzas y estableció un
// programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa
// la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es
// mayor que $50 000 la cuota a pagar será el 2% del monto. La afianzadora desea determinar
// cuál será la cuota que debe pagar cada cliente.


let totalClientes = parseInt(prompt("Ingrese la cantidad de clientes a procesar:"));

for (let i = 1; i <= totalClientes; i++) {
    let montoFianza = parseFloat(prompt(`Cliente ${i}: Ingrese el monto de la fianza:`));
    let porcentajeCuota = montoFianza < 50000 ? 0.03 : 0.02;
    let cuotaPagar = montoFianza * porcentajeCuota;

    console.log(`Cliente ${i}: Monto Fianza = $${montoFianza} | Cuota a pagar = $${cuotaPagar}`);
}