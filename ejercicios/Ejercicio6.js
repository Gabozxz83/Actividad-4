let numero = prompt("Por favor, escribe un número entre 0 y 10:");
numero = parseInt(numero);
if (numero >= 0 && numero <= 10) {
        console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, escribe un número entre 0 y 10.");
}
