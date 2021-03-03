function mostrar() {
  let precio;
  let tipo;
  let cantidad;
  let marca;
  let fabricante;
  let jabonCaro;
  let cantidadJabonCaro;
  let fabricanteJabonCaro;
  let promedio;

  let contProductos = 0;
  let contBarbijos = 0;
  let contJabon = 0;
  let contAlcohol = 0;
  let acumBarbijos = 0;
  let acumJabon = 0;
  let acumAlcohol;

  do {
    tipo = prompt("Ingresa el tipo de producto: Alcohol - Barbijo - Jabon");
    while (tipo != "Alcohol" && tipo != "Barbijo" && tipo != "Jabon") {
      tipo = prompt(
        "Reingresa el tipo de producto: Alcohol - Barbijo - Jabon"
      );
    }
    precio = parseInt(prompt("Ingresa el precio entre 100 y 300 pesos: "));
    while (isNaN(precio) || precio < 100 || precio > 300) {
      precio = parseInt(prompt("Ingresa el precio entre 100 y 300 pesos: "));
    }
    cantidad = parseInt(prompt("Ingresa la cantidad (hasta 1000 unidades): "));
    while (isNaN(cantidad) || cantidad < 0 || cantidad > 1000) {
      cantidad = prompt("Ingresa la cantidad (hasta 1000 unidades): ");
    }
    marca = prompt("Ingresa la marca: ");
    fabricante = prompt("Ingresa el fabricante: ");
    contProductos++;

    if (tipo == "Jabon") {
      contJabon++;
      acumJabon += cantidad;
      if (contJabon == 1) {
        jabonCaro = precio;
        cantidadJabonCaro = cantidad;
        fabricanteJabonCaro = fabricante;
      } else if (contJabon > 1 && precio > jabonCaro) {
        jabonCaro = precio;
        cantidadJabonCaro = cantidad;
        fabricanteJabonCaro = fabricante;
      }
    }
    if (tipo == "Barbijo") {
      contBarbijos++;
      acumBarbijos += cantidad;
    }
    if (tipo == "Alcohol") {
      contAlcohol++;
      acumAlcohol += cantidad;
    }
  } while (contProductos < 5);
  console.log("A- El jabón más caro es del fabricante " + fabricanteJabonCaro + " con un costo de $" + jabonCaro + " y se compraron " + cantidadJabonCaro);
 
  if(acumAlcohol > acumBarbijos && acumAlcohol > acumJabon){
	  promedio = acumAlcohol/contAlcohol;
	  console.log("B- El promedio por compra de alcoholes es de " + promedio);
	} else if (acumBarbijos > acumAlcohol && acumBarbijos > acumJabon){
	  promedio = acumBarbijos/contBarbijos;
	  console.log("B- El promedio por compra de barbijos es de " + promedio);
	} else {
		promedio = acumJabon/contJabon;
		console.log("B- El promedio por compra de jabones es de " + promedio);
	}
	console.log("C- La cantidad de barbijos que se compraron en total es de: " + acumBarbijos);

}
