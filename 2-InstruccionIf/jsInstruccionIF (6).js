function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad');
	if(edad>=18)
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
	}
}//FIN DE LA FUNCIÓN