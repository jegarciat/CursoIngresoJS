/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let numero;
  let sumaAcumulada = 0;
  let promedio;
  let preguntar = "s";
  let contador = 0;

  while (preguntar == "s") {
    numero = parseInt(prompt("Ingrese numero: "));
    sumaAcumulada = sumaAcumulada + numero;
    preguntar = prompt("¿Quiere ingresar otro número?: ");
    contador++;
  }
  promedio = sumaAcumulada / contador;
  document.getElementById("txtIdSuma").value = sumaAcumulada;
  document.getElementById("txtIdPromedio").value = promedio;
} //FIN DE LA FUNCIÓN
