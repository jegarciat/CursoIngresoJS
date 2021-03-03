function mostrar() {
  let numero;
  let i;
  let cantidadDiv = 0;
  numero = parseInt(prompt("Ingresa un número: "));
  while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Dato inválido. Ingrese nuevamente."));
  }
  for (i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      cantidadDiv++;
    }
  }
  if (cantidadDiv > 2) {
	console.log("El número " + numero + " no es primo");
  } else {
    console.log("El número " + numero + " es primo");
  }
} //FIN DE LA FUNCIÓN
