function mostrar() {
  let edad = parseInt(document.getElementById("txtIdEdad").value);
  let estadocivil = document.getElementById("estadoCivil").value;

  if (edad < 18 && estadocivil != "Soltero") {
    alert("Es muy pequeño para NO ser soltero");
  }
} //FIN DE LA FUNCIÓN
