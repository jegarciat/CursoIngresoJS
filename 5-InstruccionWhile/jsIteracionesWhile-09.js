/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  let numero, maximo = 0, minimo = 0 , contador = 0, respuesta = "si";

  do {
    numero = parseInt(prompt("Ingrese un número: "));
    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un número, vuelve a intentarlo: "));
    }
    contador++;

    if (contador == 1) {
      maximo = numero;
      minimo = numero;
    }
    if (contador > 1 && numero < minimo) {
      minimo = numero;
    } else if (contador > 1 && numero > maximo) {
      maximo = numero;
    }
    respuesta = prompt("¿Quiere ingresar otro número? (si/no): ");
    while (respuesta != "si" && respuesta != "no") {
      respuesta = prompt("Error, para continuar decida entre las opciones si o no: ");
    }
  } while (respuesta == "si");
  document.getElementById("txtIdMaximo").value = maximo;
  document.getElementById("txtIdMinimo").value = minimo;
} //FIN DE LA FUNCIÓN
