/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	let f;
	let m; 
	
	sexo = prompt ("Ingrese sexo: f / m ");
	
	while(sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M"){
		sexo = prompt ("Sexo inválido. Reingrese sexo: f o m ");
	}
	document.getElementById("txtIdSexo").value = sexo; 
}//FIN DE LA FUNCIÓN