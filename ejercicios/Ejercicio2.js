// Definir el número secreto
let secreto = parseInt(prompt("Jugador 1: Ingresa el número secreto:"));

// Limpiar pantalla (opcional, ya que prompt no muestra el número ingresado después)
alert("¡Ahora es el turno de adivinar!");

// Variable para guardar el intento del jugador 2
let intento;
let intentos = 0;

do {
  intento = parseInt(prompt("Jugador 2: Adivina el número:"));
  intentos++;

  if (intento < secreto) {
    alert("El número secreto es MAYOR");
  } else if (intento > secreto) {
    alert("El número secreto es MENOR");
  } else {
    alert("¡Correcto! Adivinaste el número en " + intentos + " intentos.");
  }

} while (intento !== secreto);
