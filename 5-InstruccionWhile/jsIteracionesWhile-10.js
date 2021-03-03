/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  let numero;
  let positivos = 0;
  let negativos = 0;
  let seguir;
  let contPos = 0;
  let contNeg = 0;
  let ceros = 0;
  let pares = 0;
  let promPos = 0;
  let promNeg = 0;
  let diferencia;

  do {
    numero = parseInt(prompt("Ingrese un número: "));
    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un número, vuelve a intentarlo: "));
    }
    //Identifico el signo del número (positivo, negativos, cero)

    if (numero > 0) {
      positivos = positivos + numero;
      contPos++;
    } else if (numero < 0) {
      negativos = negativos + numero;
      contNeg++;
    } else {
      ceros++;
    }
    // Identifico si el número es par o no

    if (numero % 2 == 0) {
      pares++;
    }
    seguir = prompt("¿Quiere ingresar otro número? (si/no): ");
    while (seguir != "si" && seguir != "no") {
      seguir = prompt(
        "Error, para continuar decida entre las opciones si o no: "
      );
    }
  } while (seguir == "si");

  //Calcular promedios

  if (contPos != 0) {
    promPos = positivos / contPos;
  }

  if (contNeg != 0) {
    promNeg = negativos / contNeg;
  }

  //Hago la diferencia entre positivos y negativos

  diferencia = positivos - negativos;

  console.log("1-Suma de los negativos es: " + negativos);
  console.log("2-Suma de los positivos: " + positivos);
  console.log("3-Cantidad de positivos: " + contPos);
  console.log("4-Cantidad de negativos: " + contNeg);
  console.log("5-Cantidad de ceros: " + ceros);
  console.log("6-Cantidad de números pares: " + pares);
  console.log("7-Promedio de positivos: " + promPos);
  console.log("8-Promedios de negativos: " + promNeg);
  console.log("9-Diferencia entre positivos y negativo: " + diferencia);
} //FIN DE LA FUNCIÓN
