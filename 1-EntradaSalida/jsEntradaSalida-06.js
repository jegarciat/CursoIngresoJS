/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    let a;
    let b;
    
    a = document.getElementById("txtIdNumeroUno").value;
    a = parseInt(a); /* Otra forma de declararlo es: 
    a = parseInt(document.getElementById("txtIdNumeroUno").value); (Manera simplificada)
    Lo voy a usar en "b" */

    b = parseInt(document.getElementById("txtIdNumeroDos").value); /* Se debe usar una sola forma de declarar, 
    acá lo hice de las 2 formas para ver las diferencias */

    alert("La suma es " + (a + b));


}

