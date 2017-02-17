function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;


	while(respuesta=='si')
	{
		contador++;
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		respuesta=prompt("Ingrese 'si' para finalizar");
	}

	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN

//para salir del while en este se usa resp=="s"