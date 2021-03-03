/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
let temperatura;
let tempFah;
let tempCen;

function FahrenheitCentigrados() {
  temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
  tempCen = ((temperatura - 32) * 5) / 9;
  alert(temperatura + " Fahrenheit son " + tempCen + " centrígrados");
}

function CentigradosFahrenheit() {
  tempFah = (temperatura * 9) / 5 + 32;
  alert(temperatura + " Centrígrados son " + tempFah + " Fahrenheit");
}
