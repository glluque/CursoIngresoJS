function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero=Math.floor((Math.random() * 10) + 1);
	
	if (numero>8)
	{
		alert(numero+" Exelente");
	}
	else if(numero<9 && numero>3)
	{
		alert(numero+" Aprobó");
	}
	else if (numero<4)
	{
		alert(numero+" Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN