function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad < 18) {
    alert("Es menor de edad");
  } else {
    alert("Es mayor edad");
  }
} //FIN DE LA FUNCIÓN
