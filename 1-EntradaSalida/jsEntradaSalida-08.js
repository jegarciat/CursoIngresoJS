/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let a;
	let b;
	let resultado;
	a = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	b = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = a % b;
		alert("El resto es " + resultado);
}
