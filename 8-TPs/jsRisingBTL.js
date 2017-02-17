/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad=Number.MAX_VALUE;
    var sexo="Undefined"; //preguntar
    var estadoCivil=Number.MAX_VALUE; 
    var sueldoBruto=Number.MIN_VALUE; 
    var numerolegajo=Number.MAX_VALUE; 
    var nacionalidad="Undefined";

    while(edad > 90 || edad < 18 || isNaN(edad))//preguntar
    {
        edad = prompt("Ingrese edad de la persona: " , "Entre 18 y 90 años");
        edad = parseInt(edad);

        if(edad > 90 || edad < 18 || isNaN(edad))
        {
            alert("Por favor reingrese edad de la persona.");
        }
    }

    while(sexo != "M" && sexo != "F")
    {
        sexo = prompt("Ingrese sexo de la persona: " , "M para masculino ó F para femenino");

        if(sexo != "M" && sexo != "F")
        {
            alert("Ingrese sexo de la persona nuevamente.");
        }
    }

    while(estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil))
    {
        estadoCivil = prompt("Ingrese Estado Civil de la persona: " , "1 para Soltero | 2 para Casado | 3 para Divorciados | 4 para Viudos");
        estadoCivil = parseInt(estadoCivil);

        if(estadoCivil > 4 || estadoCivil < 1 || isNaN(estadoCivil))
        {
            alert("Ingrese estado civil de la persona nuevamente.");
        }
    }

    while(sueldoBruto < 8000 || isNaN(sueldoBruto))
    {
        sueldoBruto = prompt("Ingrese sueldo bruto de la persona: " , "Mayor a $8000 sin el signo $");
        sueldoBruto = parseInt(sueldoBruto);

        if(sueldoBruto < 8000 || isNaN(sueldoBruto))
        {
            alert("Sueldo inferior a $8000 no válido. Ingrese sueldo bruto de la persona nuevamente.");
        }
    }

    while(numerolegajo > 9999 || numerolegajo < 1000 || isNaN(numerolegajo))
    {
        numerolegajo = prompt("Ingrese número de legajo de la persona: " , "XXXX");
        numerolegajo = parseInt(numerolegajo);

        if(numerolegajo > 9999 || numerolegajo < 1000 || isNaN(numerolegajo))
        {
            alert("Ingrese número de legajo de la persona nuevamente.");
        }
    }

    while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
    {
        nacionalidad = prompt("Ingrese nacionalidad de la persona: " , "A para Argentina | E para Extranjeros | N para Nacionalizados");

        if(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
        {
            alert("Ingrese nacionalidad de la persona nuevamente.");
        }
    }
    
    document.getElementById('Edad').value = edad;
    document.getElementById('Sexo').value = sexo;
    document.getElementById('EstadoCivil').value = estadoCivil;
    document.getElementById('Sueldo').value = sueldoBruto;
    document.getElementById('Legajo').value = numerolegajo;
    document.getElementById('Nacionalidad').value = nacionalidad;
}
