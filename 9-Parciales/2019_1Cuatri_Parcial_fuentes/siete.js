function mostrar()
{
    let altura;
    let sexo;
    let promedioAlturasTotal;
    let contjugadores = 0;
    let acumAltura = 0;
    let alturaMin;
    let sexoAlturaMin;
    let flag = 1; 
    let contMujeresAltas = 0 // Contador de mujeres que superen los 190cm

    do {
        altura = parseInt(prompt("Ingrese altura (máx 250cm): "));
        while (isNaN(altura) || altura < 0 || altura > 250){
            altura = parseInt(prompt("Dato inválido. Reingrese altura (máx 250cm): ")); 
        }
        sexo = prompt("Ingrese sexo (femenino o masculino): ");
        while (sexo != "femenino" && sexo != "masculino"){
            sexo = prompt("Dato inválido. Reingrese sexo (femenino o masculino): ");
        }
        contjugadores++;
        acumAltura += altura;

        if (flag || altura < alturaMin){
            alturaMin = altura;
            sexoAlturaMin = sexo;
            flag = 0;
        }
        if (sexo == "femenino" && altura > 190){
            contMujeresAltas++;
        }

    } while (contjugadores < 5);

    if (contjugadores > 0){
        promedioAlturasTotal = acumAltura/contjugadores;
        console.log("A- El promedio de las alturas totales es de: " + promedioAlturasTotal);
    }
    console.log("B- La altura más baja es de " + alturaMin + " y el sexo de esa persona es " + sexoAlturaMin);
    console.log("C- La cantidad de mujeres que su altura supera los 190 centimetros es de: " + contMujeresAltas)
}
