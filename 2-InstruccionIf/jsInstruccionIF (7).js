function Mostrar()
{
//tomo la edad  
	var edad;
	var estado;
	edad=document.getElementById('edad').value;
	estado=document.getElementById('estadoCivil').value;

	if(edad<18 && estado!="Soltero") //el valor de soltero debe estar entre "" y en mayuscula para que me tome el Id
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	

	


}//FIN DE LA FUNCIÓN