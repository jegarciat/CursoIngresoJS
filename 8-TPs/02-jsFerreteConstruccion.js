/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
let largo, altura, alambreRec, radio, alambreCir, areaRec, cementototal, caltotal;
let cemento = 2, cal = 3;

function Rectangulo() {
  largo = parseInt(document.getElementById("txtIdLargo").value);
  altura = parseInt(document.getElementById("txtIdAncho").value);
  alambreRec = (largo * 2 + altura * 2) * 3;
  alert("Se deben comprar " + alambreRec + " metros de alambre");
}
function Circulo() {
  radio = parseInt(document.getElementById("txtIdRadio").value);
  alambreCir = Math.ceil(2 * Math.PI * radio);
  alert("Se deben comprar " + alambreCir + " metros de alambre");
}
function Materiales() {
  //Calcular el área del rectangulo y luego, por regla de tres calculo el cemento y cal necesarios
  areaRec = largo * altura;
  cementototal = (areaRec * cemento) / 1;
  caltotal = (areaRec * cal) / 1;
  alert(
    "Se necesitan " +
      cementototal +
      " de bolsas cemento y " +
      caltotal +
      " de bolsas de cal para hacer el contrapiso"
  );
}
