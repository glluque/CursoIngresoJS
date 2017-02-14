function Mostrar()
{
//tomo la edad  
	var edad;
	var estado;
	edad=document.getElementById('edad').value;
	estado=document.getElementById('estadoCivil').value;

	if(edad<18 && estado!="Soltero") //el valor de soltero debe estar entre "" y en mayuscula para que me tome el Id
	{
		//alert("Es muy pequeño para NO ser soltero"); no muestro nada en este ejercicio.
	}
	else if(edad>17 && estado=="Soltero")
	{
		alert("Es soltero y no es menor")
	}
	
	/* otra
	if(edad>17 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}*/

}//FIN DE LA FUNCIÓN