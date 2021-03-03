function mostrar() {
  let edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad <= 12) {
    alert("Eres un niño");
  } else {
    if (edad <= 17) {
      alert("Eres un adolescente");
    } else {
      alert("Eres un adulto");
    }
  }
} //FIN DE LA FUNCIÓN
