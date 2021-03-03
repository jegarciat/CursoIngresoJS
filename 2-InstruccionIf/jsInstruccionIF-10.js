function mostrar() {
  let min = 1;
  let max = 11;
  let numero = Math.floor(Math.random() * (max - min) + 1);

  if (numero < 4) {
    alert(numero + " = Vamos, la proxima se puede");
  } else {
    if (numero == 9 || numero == 10) {
      alert(numero + " = EXCELENTE");
    } else {
      alert(numero + " = APROBÓ");
    }
  }
} //FIN DE LA FUNCIÓN
