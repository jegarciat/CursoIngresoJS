function mostrar() {
  let numero;

  for (let i = 0; ; ) {
    numero = parseInt(prompt("Ingresa un número: "));
    while (isNaN(numero) || numero <= 0) {
      numero = parseInt(prompt("Dato inválido. Ingrese nuevamente."));
    }
    console.log(numero);
    if (numero == 9) {
      break;
    }
  }
  alert("Chau");
} //FIN DE LA FUNCIÓN
