let numero = parseInt(prompt("Escribe un número para calcular su factorial:"));
let factorial = 1;
if (numero < 0) {
  alert("El factorial no está definido para números negativos.");
} else {
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  alert("El factorial de " + numero + " es: " + factorial);
}
