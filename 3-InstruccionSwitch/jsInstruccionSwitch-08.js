function mostrar() {
  let destino = document.getElementById("txtIdDestino").value;

  switch (destino) {
    case "Ushuaia":
    case "Bariloche":
      alert("Frío");
      break;
    case "Cataratas":
    case "Mar del plata":
      alert("Calor");
      break;
  }
} //FIN DE LA FUNCIÓN
