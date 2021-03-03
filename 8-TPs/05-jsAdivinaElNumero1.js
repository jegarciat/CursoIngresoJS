/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let numero;
let contador = 0;
let max = 100;
let min = 1;

function comenzar() {
  alert("Adivine un número entre 0 y 100. Cada vez que le des a 'Comenzar' se generará un número nuevo");
  numeroSecreto = Math.floor(Math.random() * (max - min) + 1);
  //Para probar el código en caso de adivinar el número
  console.log("Número secreto: " + numeroSecreto);
}
function verificar() {
  numero = parseInt(document.getElementById("txtIdNumero").value);
  if (isNaN(numero) || numero < 0 || numero > 100){
    alert("Error, ingresa un número entre 0 y 100");
  }
  else if (numero == numeroSecreto) {
    contador++; 
    document.getElementById("txtIdIntentos").value = contador;
    alert("Usted es un ganador!!! Y en solo " + contador + " intentos");
  }
  else if (numero < numeroSecreto && numero >= 0){
    contador++;
    alert("Te falta...");
    document.getElementById("txtIdIntentos").value = contador;
  }
  else if (numero > numeroSecreto && numero <= 100){
    contador++;
    alert("Pasaste de largo...");
    document.getElementById("txtIdIntentos").value = contador;
  }
}
