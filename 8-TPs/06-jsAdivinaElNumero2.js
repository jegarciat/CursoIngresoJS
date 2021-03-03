/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto;
let contadorIntentos = 0;
let max = 100;
let min = 1;
let numero;

function comenzar() {
  //Genero el número RANDOM entre 1 y 100
  alert(
    "Adivine un número entre 0 y 100. Cada vez que le des a 'Comenzar' se generará un número nuevo"
  );
  numeroSecreto = Math.floor(Math.random() * (max - min) + 1);
  //Para probar el código en caso de adivinar el número
  console.log("Número secreto: " + numeroSecreto);
}

function verificar() {
  numero = parseInt(document.getElementById("txtIdNumero").value);
  contadorIntentos++;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  if (isNaN(numero) || numero < 0 || numero > 100) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Error, ingresa un número entre 0 y 100");
  }
  if (numero == numeroSecreto && contadorIntentos == 1) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Usted es un psíquico");
  } else if (numero == numeroSecreto && contadorIntentos == 2) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Excelente percepción");
  } else if (numero == numeroSecreto && contadorIntentos == 3) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Esto es suerte");
  } else if (numero == numeroSecreto && contadorIntentos == 4) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Excelente técnica");
  } else if (numero == numeroSecreto && contadorIntentos == 5) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Usted está en la media");
  } else if (numero == numeroSecreto && (contadorIntentos >= 6 && contadorIntentos <= 10)) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Falta técnica");
  } else if (numero == numeroSecreto && contadorIntentos > 10) {
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    alert("Afortunado en el amor!!");
  }
}
