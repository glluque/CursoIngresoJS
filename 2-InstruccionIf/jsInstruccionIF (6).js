function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad');
	if(edad>=18)
	{
		alert("Es mayor");
	}
	if(edad>=13 && edad<=17);
	{
		alert("Es adolecente");
	}
	if(edad<=12)
	{
		alert("Es un niño");
	}
}//FIN DE LA FUNCIÓN