/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  let clave;
  clave = prompt("Ingrese el número clave");

  while (clave != "utn750") {
    clave = prompt("Clave inválida. Inténtelo de nuevo ");
  }
  alert("Clave correcta");
} //FIN DE LA FUNCIÓN
