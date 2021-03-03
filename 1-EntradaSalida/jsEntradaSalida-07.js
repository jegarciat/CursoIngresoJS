/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let a;
	let b; 
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	b = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert("La suma es " + (a+b));
}

function restar()
{
	let a;
	let b;
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	b = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert("La resta es " + (a-b));
}

function multiplicar()
{ 
	let a;
	let b;
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	b = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert("La multiplicación es " + (a*b));
}

function dividir()
{
	let a;
	let b;
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	b = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert("La división es " + (a/b));
}

