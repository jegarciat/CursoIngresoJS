function mostrar()
{
	let nombre;
	let edad;
	let estadocivil;
	let sexo;
	let seguir; 
	let temperatura;
	let temperaturaMax;
	let flag = 1;
	let nombreMaxTemperatura;
	let contMayorViudo = 0; // Contador de mayores de edad viudos
	let contHSoV = 0; //Contador de hombres solteros o viudos
	let contMayoresFiebre = 0 // Contador de personas con más 60 años con más de 38 de temperatura
	let acumEdadHS = 0;
	let contHS = 0;
	let promedioEdadHS; 

	do{
		nombre = prompt("Ingrese nombre: ");
		edad = parseInt(prompt("Ingrese edad: "));
		while (isNaN(edad) || edad <= 0 || edad >= 100){
			edad = parseInt(prompt("Error, reingrese edad: "));
		}
		sexo = prompt("Ingrese estado sexo: f o m");
		while (sexo != "f" && sexo != "m"){
			sexo = prompt("Error, reingrese estado sexo: f o m");
		}
		estadocivil = prompt("Ingrese estado civil: Soltero - Casado - Viudo");
		while(estadocivil != "Soltero" && estadocivil != "Casado" && estadocivil != "Viudo"){
			estadocivil = prompt("Error, reingrese estado civil: Soltero - Casado - Viudo");
		}
		temperatura = parseFloat(prompt("Ingrese temperatura: "));
		while (isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error, reingrese temperatura: "));
		}
		if (flag || temperatura > temperaturaMax){
			temperaturaMax = temperatura;
			nombreMaxTemperatura = nombre;
			flag = 0; 
		}
		if (edad >= 18 && estadocivil == "Viudo"){
			contMayorViudo++;
		}
		if (sexo == "m" && (estadocivil == "Soltero" || estadocivil == "Viudo")){
			contHSoV++;
		}
		if (edad >= 60 && temperatura > 38){
			contMayoresFiebre++;
		}
		if (sexo == "m" && estadocivil == "Soltero"){
			acumEdadHS += edad;
			contHS++;
		}	
		seguir = prompt("¿Quiere agregar otro pasajero?: (si/no)");
	} while (seguir == "si");

	console.log("A- La persona con mas temperatura es "+nombreMaxTemperatura+" con "+temperaturaMax+" grados");
	console.log("B- La cantidad de mayores de edad viudos es de: " + contMayorViudo);
	console.log("C- La cantidad de hombres que hay solteros o viudos es de: " + contHSoV);
	console.log("D- La cantidad de mayores de 60 años con fiebre es: " + contMayoresFiebre);

	if (contHS > 0){
		promedioEdadHS = (acumEdadHS/contHS);
		console.log("E- El promedio de edad entre los hombres solteros es de: " + promedioEdadHS);
	}
	else {
		console.log("E- El promedio de edad entre los hombres solteros es de: 0");
	}
}
