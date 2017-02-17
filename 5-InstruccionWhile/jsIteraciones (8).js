function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numero;
	
	//var respuesta='si';
	while(respuesta=='si')
	{
		contador++;
		numero=prompt("Ingresando numeros");
		numero=parseInt(numero);

		if(numero>1)
		{
			positivo=positivo+numero;
			respuesta=prompt("Ingrese 'si' para continuar ó cualquier tecla para finalizar");
			
		}
		else if(numero<0)
			{
				negativo=negativo*numero;
				respuesta=prompt("Ingrese 'si' para continuar ó cualquier tecla para finalizar"); //FUNCIONA
			}
		/*if(numero<0)
		{
			negativo=negativo*numero;
			respuesta=prompt("Ingrese 'si' para continuar ó cualquier tecla para finalizar");
		}*/ //FUNCIONA
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN