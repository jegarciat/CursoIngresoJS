function mostrar() {
  let precio;
  let tipo;
  let cantidadDeUnidades;
  let marca;
  let fabricante;
  let promedio;
  let precioAlcoholBarato;
  let fabricanteBarato;
  let cantidadAlcoholBarato;

  let acumBarbijo = 0;
  let acumAlcohol = 0;
  let acumJabon = 0;
  let contProductos = 0;
  let contAlcohol = 0;
  let contBarbijo = 0;
  let contJabon = 0;

  do {
    tipo = prompt("Ingrese el tipo de producto: Barbijo/Alcohol/Jabon");
    while (tipo != "Barbijo" && tipo != "Alcohol" && tipo != "Jabon") {
      tipo = prompt(
        "Error, reingrese el tipo de producto: Barbijo/Alcohol/Jabon"
      );
    }
    precio = parseInt(prompt("Ingrese precio en 100 y 300 pesos: "));
    while (isNaN(precio) || precio < 100 || precio > 300) {
      precio = parseInt(
        prompt("Error, reingrese precio entre 100 y 300 pesos: ")
      );
    }
    cantidadDeUnidades = parseInt(prompt("Ingrese cantidad de unidades: "));
    while (cantidadDeUnidades < 0 || cantidadDeUnidades > 1000 || isNaN(cantidadDeUnidades)) {
      cantidadDeUnidades = parseInt(prompt("Error, reingrese cantidad de unidades (hasta 1000 unidades): "));
    } 
    marca = prompt("Ingrese la marca del producto: ");
    fabricante = prompt("Ingrese el fabricante del producto: ");
    contProductos++;

    if (tipo == "Alcohol") {
      acumAlcohol += cantidadDeUnidades;
      contAlcohol++;
      if (contAlcohol == 1) {
        precioAlcoholBarato = precio;
        fabricanteBarato = fabricante;
        cantidadAlcoholBarato = cantidadDeUnidades;
      } else if (contAlcohol > 1 && precio < precioAlcoholBarato) {
        precioAlcoholBarato = precio;
        fabricanteBarato = fabricante;
        cantidadAlcoholBarato = cantidadDeUnidades;
      }
    }
    if (tipo == "Barbijo") {
      acumBarbijo += cantidadDeUnidades;
      contBarbijo++;
    }
    if (tipo == "Jabon") {
      acumJabon += cantidadDeUnidades;
      contJabon++;
    }
  } while (contProductos < 5);
  
  console.log("A- El alcohol más barato es del fabricante " + fabricanteBarato + " con un precio de $" +
    precioAlcoholBarato + " y se compraron " + cantidadAlcoholBarato + " unidades");
    
    if (acumAlcohol > acumBarbijo && acumAlcohol > acumJabon){
      promedio = acumAlcohol/contAlcohol;
      console.log("B- El promedio de alcoholes por compra es de: " + promedio);
    }
    else if(acumBarbijo > acumAlcohol && acumBarbijo > acumJabon){
      promedio = acumBarbijo/contBarbijo;
      console.log("B- El promedio de barbijos por compra es de: " + promedio);
    }
    else {
      promedio = acumJabon/contJabon;
      console.log("B- El promedio de jabones por compra es de: " + promedio);
    }
    console.log("C- La cantidad de unidades de jabones que hay en total es de: " + acumJabon);
}
