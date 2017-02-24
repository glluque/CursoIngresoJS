function Mostrar()
{
	//creo variables
	var contador=0;

	//creo cond
	/*for(contador=10;contador>0;contador--) //funciona, estaba poniendo ++ en contador cuando debia poner --
		{
			//alert("Número :"+contador); esta bien
			console.log("Número :"+contador); //lo muestro por consola
			if(contador==1)
			{
				break;
			}
		}*/

	var mascota;
	var respuesta="si";
	var contadorMascotaSi=0;
	var contadorMascotaNo=0;
	var tipoMascota;
	var edad;


	for(;contador<1000;)
	{
		mascota=prompt("¿Tiene mascota?")
		
		while(respuesta!="si" && respuesta!="no")
		{
			mascota=prompt("Esto no viene al caso! ¿Tiene mascota?")
			if(respuesta="si")
			{
				contadorMascotaSi++;
				tipoMascota=prompt("¿Que tipo de mascota?");
				while(tipoMascota!="perro" && tipoMascota!="gato")
				{
					tipoMascota=prompt("Tipo de mascota incorrecto. ¿Que tipo de mascota tiene?")
				}
			}
			else
			{
				contadorMascotaNo++;
			}
		}

		contador++;


	}	
		 
}//la persona mas vieja que no tenga mascota
// necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de 5 años de edad