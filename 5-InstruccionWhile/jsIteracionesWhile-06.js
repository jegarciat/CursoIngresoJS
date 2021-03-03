function mostrar() {
  let numero;
  let sumaAcumulada = 0; //acumulador
  let promedio;
  let i = 0; //contador

  /*while (i < 5) {
    numero = parseInt(prompt("Ingrese numero: "));
    sumaAcumulada = sumaAcumulada + numero;
    i++;
  }
  promedio = sumaAcumulada / 5;
  document.getElementById("txtIdSuma").value = sumaAcumulada;
  document.getElementById("txtIdPromedio").value = promedio; */

  //Resolviendolo con FOR:

  for (i = 0; i < 5; i++) {
    numero = parseInt(prompt("Ingrese numero: "));
    sumaAcumulada = sumaAcumulada + numero;
  }
  promedio = sumaAcumulada / 5;
  document.getElementById("txtIdSuma").value = sumaAcumulada;
  document.getElementById("txtIdPromedio").value = promedio;
} //FIN DE LA FUNCIÓN
