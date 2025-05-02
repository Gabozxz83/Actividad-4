let positivos = 0;
let sumaPositivos = 0;
let negativos = 0;
let sumaNegativos = 0;
let ceros = 0;
for (let i = 1; i <= 10; i++) {
  let entrada = prompt("Ingresa el número " + i + ":");
  let numero = parseFloat(entrada);
   if (isNaN(numero)) {
    alert("Paila no es un número válido. Intenta de nuevo.");
    i--; 
    continue;
  }
  if (numero > 0) {
    sumaPositivos += numero;
    positivos++;
  } else if (numero < 0) {
    sumaNegativos += Math.abs(numero); // usa Math.abs si quieres sin signo
    negativos++;
  } else {
    ceros++;
  }
}
let mediaPositivos = positivos > 0 ? (sumaPositivos / positivos) : 0;
let mediaNegativos = negativos > 0 ? (sumaNegativos / negativos) : 0;
alert("Cantidad de positivos: " + positivos);
alert("Cantidad de negativos: " + negativos);
alert("Cantidad de ceros: " + ceros);

