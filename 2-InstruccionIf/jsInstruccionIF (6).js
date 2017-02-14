function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	
	if (edad<18 && edad>12)
	{
		alert("Es adolecente");
	}
	else 
	{
		if(edad>17)
		{
			alert("Es mayor");
		}
		else if (edad<13)
		{
			alert("Es niño");
		}
		
	}
//salio!!!! no habia puesto el .value luego de la edad. 




	/*if(edad>=18)
	{
		alert("Es mayor");
	}
	else if(edad<18 && edad>12)
	{
		alert("Es adolecente");
	}
	else
	{
		alert("Es un niño");
	}*/
}//FIN DE LA FUNCIÓN