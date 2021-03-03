function mostrar()
{
  let tipo;
  let cantidad;
  let precioXbolsa;
  let importe; 
  let seguir;
  let acumCemento = 0;
  let acumArena = 0;
  let acumCal = 0;
  let subtotal = 0;
  let totalBolsas;
  let descuento;
  let maxTipo;
  let maxPrecio;
  let flag = 1;
  let tipoMaxBolsa;
  let importefinal; 

  do {
    tipo = prompt("Ingrese el tipo de producto: Arena - Cal - Cemento");
    while(tipo != "Arena" && tipo != "Cal" && tipo != "Cemento"){
      tipo = prompt("Inválido. Reingrese el tipo de producto: Arena - Cal - Cemento");
    }
    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    while(isNaN(cantidad) || cantidad <= 0){
      cantidad = parseInt(prompt("Error. Reingrese la cantidad de bolsas: "));
    }
    precioXbolsa = parseInt(prompt("Ingrese el precio por bolsa: "));
    while(isNaN(precioXbolsa) || precioXbolsa <= 0){
      precioXbolsa = parseInt(prompt("Error. Reingrese el precio por bolsa: "));
    }
    
    importe = cantidad*precioXbolsa;
    subtotal = subtotal + importe;

    switch(tipo){
      case "Arena":
        acumArena += cantidad;
        break;
      case "Cal":
        acumCal += cantidad;
        break;
      case "Cemento":
        acumCemento += cantidad;
        break;
    }
    if (flag || precioXbolsa > maxPrecio){
      maxPrecio = precioXbolsa;
      maxTipo = tipo;
      flag = 0; 
    }
    seguir = prompt("¿Quiere ingresar otro producto: (si/no)");
  } while (seguir == "si");
  
  totalBolsas = acumCemento + acumCal + acumArena;

  if (totalBolsas > 10 && totalBolsas < 30){
    descuento = subtotal*0.15;
    importefinal = subtotal - descuento;

  } else if (totalBolsas >= 30){
    descuento = subtotal*0.25;
    importefinal = subtotal - descuento;
  }

  if (acumArena > acumCal && acumArena > acumCemento){
    tipoMaxBolsa = "Arena";
  }
  else if (acumCal >= acumArena && acumCal > acumCemento){
    tipoMaxBolsa = "Cal";
  }
  else {
    tipoMaxBolsa = "Cemento";
  }
  
  console.log("A- El importe total bruto sin descuento es: $" + subtotal);
  
  if (totalBolsas > 10){
    console.log("B- El importe total a pagar con descuento es de $" + importefinal);
  } else {
    console.log("B- No hay descuentos, el precio es de: $" + subtotal);
  }

  console.log("D- El tipo con mas cantidad de bolsas es: " + tipoMaxBolsa);
  console.log("F- El tipo mas caro es: " + maxTipo + " con un precio de $" + maxPrecio);
}
