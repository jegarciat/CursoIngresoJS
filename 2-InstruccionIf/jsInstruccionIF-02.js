function mostrar() {
  //Mostrar solo si es mayor de edad el usuario
  let edad;
  edad = parseInt(document.getElementById("txtIdEdad").value);
  if (edad >= 18) {
    alert("Es mayor edad");
  }
} //FIN DE LA FUNCIÓN
