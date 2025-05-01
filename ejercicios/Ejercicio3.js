let producto = 1;
let contador = 0;
let numero = 1;
let impares = [];

while (contador < 10) {
  impares.push(numero);     // Guardar el número impar
  producto *= numero;       // Multiplicar
  numero += 2;              // Pasar al siguiente impar
  contador++;
}

alert("Los 10 primeros números impares son: " + impares.join(", "));
console.log("Números impares:", impares);
