function mostrar()
{
	let nombre; 
	let nacionalidad;
	let edad;
	let estadocivil;
	let sexo;
	let seguir; 
	let temperatura;
	let nacionalidadTemperaturaMax;
	let temperaturaMax;
	let flag = 1;
	let contMayoresdeEdad = 0;
	let contMSoV = 0; //Contador de mujeres solteras o viudas 
	let contTerEdad = 0; //Contador de personas de tercera edad
	let promedio; 
	let contMC = 0; //Contador de mujeres casadas
	let acumEdadMC = 0; //Acumulador de edad de mujeres casadas

	do {
		nombre = prompt("Ingrese nombre: ");
		nacionalidad = prompt("Ingrese nacionalidad: "); 
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
			nacionalidadTemperaturaMax = nacionalidad;
			temperaturaMax = temperatura; 
			flag = 0; 
		}
		if (edad > 17 && estadocivil == "Soltero"){
			contMayoresdeEdad++; 
		}
		if (sexo == "f" && (estadocivil == "Soltero" || estadocivil == "Viudo")){
			contMSoV++;
		}
		if (edad >= 60 && temperatura > 38){
			contTerEdad++;
		}
		if (sexo == "f" && estadocivil == "Casado"){
			acumEdadMC += edad; 
			contMC++; 
		}
		seguir = prompt("¿Quieres agregar otro pasajero?: (si/no)")
	} while (seguir == "si");
	console.log("A- La nacionalidad de la persona con más temperatura es: " + nacionalidadTemperaturaMax + ", con " + temperaturaMax + " grados");
	console.log("B- La cantidad de mayores de edad solteros es de: " + contMayoresdeEdad);
	console.log("C- La cantidad de mujeres solteras o viudas es de: " + contMSoV);
	console.log("D- Hay " + contTerEdad + " personas de la tercera edad con más de 38 grados de temperatura");
	
	if (contMC > 0 ){
		promedio = (acumEdadMC/contMC); 
		console.log("E- El promedio de edad entre las mujeres casadas es de: " + promedio);
	}
	else {
		console.log("E- No hay mujeres casadas");
	}
}
