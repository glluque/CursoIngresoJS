function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador<5)
	{
		contador++;
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		acumulador=acumulador+numero;



	}

	promedio=acumulador/numero; //supongo que esta bien
	//fijar si en lugar de acumulador/numero, no iria contador.

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN