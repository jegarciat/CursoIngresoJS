function mostrar() {
  let estacion;
  let destino;
  let aumento;
  let descuento;
  const precio = 15000;
  let preciofinal;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        aumento = precio * 0.2;
        preciofinal = precio + aumento;
        alert("El precio final es " + preciofinal);
      } else if (destino == "Cataratas" || destino == "Cordoba") {
        descuento = precio * 0.1;
        preciofinal = precio - descuento;
        alert("El precio final es " + preciofinal);
      } else if (destino == "Mar del plata") {
        descuento = precio * 0.2;
        preciofinal = precio - descuento;
        alert("El precio final es " + preciofinal);
      }
      break;
    case "Verano":
      if (destino == "Bariloche") {
        descuento = precio * 0.2;
        preciofinal = precio - descuento;
        alert("El precio final es " + preciofinal);
      } else if (destino == "Cataratas" || destino == "Cordoba") {
        aumento = precio * 0.1;
        preciofinal = precio + aumento;
        alert("El precio final es " + preciofinal);
      } else if (destino == "Mar del plata") {
        aumento = precio * 0.2;
        preciofinal = precio + aumento;
        alert("El precio final es " + preciofinal);
      }
      break;
    case "Otoño":
    case "Primavera":
      if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata") {
        aumento = precio * 0.1;
        preciofinal = precio + aumento;
        alert("El precio final es " + preciofinal);
      } else if (destino == "Cordoba") {
        alert("El precio final es " + precio);
      }
      break;
  }
} //FIN DE LA FUNCIÓN
