/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
let productoUno, productoDos, productoTres, iva, importefinal, suma, promedio;

function Sumar() {
  productoUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  productoDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  productoTres = parseInt(document.getElementById("txtIdPrecioTres").value);
  suma = productoUno + productoDos + productoTres;
  alert("El precio de los productos sin IVA es de " + suma + " pesos ");
}
function Promedio() {
  promedio = suma / 3;
  alert("El precio promedio es de " + promedio + " pesos ");
}
function PrecioFinal() {
  iva = (suma * 21) / 100;
  importefinal = suma + iva;
  alert("El precio más IVA es de " + importefinal + " pesos ");
}
