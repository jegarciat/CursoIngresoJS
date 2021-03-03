/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let numero,
    negativos = 1,
    positivos = 0,
    respuesta = "si";
    contadorNeg = 0; 

  do {
    numero = parseInt(prompt("Ingrese un número: "));
    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un número, vuelve a intentarlo: "));
    }
    if (numero < 0) {
      negativos *= numero;
      flag == 1; 
    } else {
      positivos += numero;
    }
    respuesta = prompt("¿Quiere ingresar otro número? (si/no): ");
    while (respuesta != "si" && respuesta != "no") {
      respuesta = prompt("Error, para continuar decida entre las opciones si o no: ");
    }
    if (respuesta == "no") {
      alert('Listo, si quieres volver a empezar presiona "Comenzar el ingreso"');
    }
  } while (respuesta == "si");
  document.getElementById("txtIdSuma").value = positivos;
  if (flag == 0){
    document.getElementById("txtIdProducto").value = 0; 
  }
  else {document.getElementById("txtIdProducto").value = negativos;}
} //FIN DE LA FUNCIÓN
