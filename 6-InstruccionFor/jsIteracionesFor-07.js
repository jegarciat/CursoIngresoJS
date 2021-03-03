function mostrar() {
  let numero;
  let i;
  let contador = 0;
  numero = parseInt(prompt("Ingresa un número: "));
  while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Dato inválido. Ingrese nuevamente."));
  }
  for (i = 1; i <= numero; i++){
	  if (numero % i == 0){
		  console.log(i);
		  contador++;
	  }
  }
  console.log("La cantidad de divisores son: " + contador);
} //FIN DE LA FUNCIÓN
