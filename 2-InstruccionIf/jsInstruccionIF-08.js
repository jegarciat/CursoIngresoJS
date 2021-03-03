function mostrar() {
  let edad = parseInt(document.getElementById("txtIdEdad").value);
  let estadocivil = document.getElementById("estadoCivil").value;

  if (edad >= 18 && estadocivil == "Soltero") {
    alert("Es soltero y no es menor.");
  }
} //FIN DE LA FUNCIÓN
