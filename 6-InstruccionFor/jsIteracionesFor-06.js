function mostrar() {
  let numero;
  let i;
  let pares = 0; 
  numero = parseInt(prompt("Ingresa un número: "));
  while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Dato inválido. Ingrese nuevamente."));
  }
  for (i = 1; i <= numero; i++){
	if (i % 2 == 0){
		console.log(i);
		pares++;
	}
  }
  console.log("La cantidad de números pares son: " + pares);
} //FIN DE LA FUNCIÓN
