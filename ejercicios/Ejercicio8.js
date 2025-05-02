// Pedir N sueldos y mostrar el sueldo máximo
let N = parseInt(prompt("¿Cuántos sueldos vas a ingresar?"));
let sueldoMaximo = 0;

for (let i = 1; i <= N; i++) {
    let sueldo = parseFloat(prompt(`Introduce el sueldo #${i}:`));
    if (sueldo > sueldoMaximo) {
        sueldoMaximo = sueldo;
    }
}

console.log(`El sueldo máximo es: $${sueldoMaximo.toFixed(2)}`);

// Contador de 00000 a 99999 con los 3 reemplazados por 'E'
for (let i = 0; i <= 99999; i++) {
    let numeroFormateado = i.toString().padStart(5, '0');
    let numeroTransformado = numeroFormateado.replaceAll('3', 'E');
    console.log(numeroTransformado.split('').join('-'));
}
