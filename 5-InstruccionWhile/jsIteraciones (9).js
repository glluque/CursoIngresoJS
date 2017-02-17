function Mostrar()
{

	var contador=0;
	// declarar variables
	var max=0;
	var min=0;
	var numero;
	//var respuesta=no;
	//max=Number.MAX_VALUE; //w3school
	//min=Number.MIN_VALUE; 

	while(numero!='no')
	{
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if (numero>max)
		{
			max=numero;
		}
		else if(numero<min)
		{
			min=numero;
		}
		
		numero=prompt("Ingrese un numero: (Escriba 'no' para terminar)");

	}

	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;



}//FIN DE LA FUNCIÓN