function mostrar() {
  let numerodeSaludos = parseInt(prompt("Ingresa la cantidad de saludos: "));
  while (isNaN(numerodeSaludos) || numerodeSaludos <= 0 ){
    numerodeSaludos = parseInt(prompt("Número inválido. Ingrese nuevamente la cantidad de saludos "));
  }

  for (let i = 0; i < numerodeSaludos; i++) {
    document.write("Hola UTN FRA" + "<br>");
  }
} //FIN DE LA FUNCIÓN
