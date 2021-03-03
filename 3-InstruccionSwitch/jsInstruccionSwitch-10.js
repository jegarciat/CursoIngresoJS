function mostrar() {
  let estacion = document.getElementById("txtIdEstacion").value;
  let destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino != "Bariloche") {
        alert("No se viaja");
      } else {
        alert("Se viaja");
      }
      break;
    case "Verano":
      if (destino == "Cataratas" || destino == "Mar del plata") {
        alert("Se viaja");
      } else {
        alert("No se viaja");
      }
      break;
    case "Primavera":
      if (destino != "Bariloche") {
        alert("Se viaja");
      } else {
        alert("No se viaja");
      }
      break;
    case "Otoño":
      alert("Se viaja");
      break;
  }
  print("Hello World");
} //FIN DE LA FUNCIÓN
