function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	/*if(edad<18)
	{
		if(edad>12)
		{
			alert("Usted es un adolecente");
		}
	}
	*/

	if(edad<18 && edad>=12)
	{
		alert("Usted es un adolecente");
	} 

}//FIN DE LA FUNCIÓN