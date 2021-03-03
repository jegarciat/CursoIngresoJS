/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let lampara = 35;
  let marca;
  let cantidad;
  let descuento;
  let preciofinal;
  let impuestos;

  cantidad = parseInt(document.getElementById("txtIdCantidad").value);
  if (cantidad < 0 || isNaN(cantidad)) {
    document.getElementById("txtIdprecioDescuento").value = "Dato inválido. Ingrese un número mayor que 0";
  }
  marca = document.getElementById("Marca").value;

  switch (marca) {
    case "ArgentinaLuz":
      if (cantidad >= 6) {
        descuento = lampara * 0.5;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 5) {
        descuento = lampara * 0.4;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 4) {
        descuento = lampara * 0.25;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 3) {
        descuento = lampara * 0.15;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad <= 2 && cantidad >= 0) {
        preciofinal = lampara * cantidad;
      } 
      break;
    case "FelipeLamparas":
      if (cantidad >= 6) {
        descuento = lampara * 0.5;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 5) {
        descuento = lampara * 0.3;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 4) {
        descuento = lampara * 0.25;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 3) {
        descuento = lampara * 0.1;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad <= 2 && cantidad >= 0) {
        preciofinal = lampara * cantidad;
      }
      break;
    case "JeLuz":
    case "HazIluminacion":
    case "Osram":
      if (cantidad >= 6) {
        descuento = lampara * 0.5;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 5) {
        descuento = lampara * 0.3;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 4) {
        descuento = lampara * 0.2;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad == 3) {
        descuento = lampara * 0.05;
        preciofinal = lampara * cantidad - descuento;
      } else if (cantidad <= 2 && cantidad >= 0) {
        preciofinal = lampara * cantidad;
      }
      break;
  }
  if (preciofinal >= 120) {
    impuestos = preciofinal * 0.1;
    preciofinal += impuestos;
    document.getElementById("txtIdprecioDescuento").value =
      "Usted pago $" + preciofinal + " siendo $" + impuestos + " el impuesto que se pagó";
  } else if (preciofinal >= 0 && preciofinal < 120) {
    document.getElementById("txtIdprecioDescuento").value =
      "El precio total es de $" + preciofinal;
  }
}
