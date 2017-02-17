function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m")
{
	var sexo = prompt("Reingrese f ó m .");

}



document.getElementById('Sexo').value=sexo;

alert("Su sexo es "+sexo); //funciona

}//FIN DE LA FUNCIÓN