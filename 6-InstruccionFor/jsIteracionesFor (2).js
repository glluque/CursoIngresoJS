function Mostrar()
{
	
	var bandera="nadie";

	var mascota;
	var contador=0;
	var contadorMascota=0;
	var contadorNoMascota=0;
	var tipoMascota;
	var edad;
	var edadMasVieja;
	var edadMasViejaSinMascota;
	var nombrePrimerGato;
	var edadGato;
	var sexo;

	for(;contador<2;)
	{
		edad=prompt('Ingrese su edad');

		sexo=prompt('Ingrese su sexo');
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt('ERROR Ingrese su sexo');
		}

		mascota=prompt('Tiene mascota?');
		
		while(mascota!='si' && mascota!='no')
		{
			mascota=prompt('ERROR Ingrese si tiene mascota con si o no');
		}

		if(mascota=='si')
		{
			contadorMascota++;

			tipoMascota=prompt('Que tipo de mascota es?');
			while(tipoMascota!='perro' && tipoMascota!='gato')
			{
				tipoMascota=prompt('ERROR Ingrese si es perro o gato');
			}

			if(tipoMascota=='gato' && edad>=30 && sexo=='f')
			{
				
				edadGato=prompt('Ingrese la edad de su gato');
				edadGato=parseInt(edadGato);
				while(edadGato>15)
				{
					edadGato=prompt('ERROR Ingrese la edad de su gato correctamente');
					edadGato=parseInt(edadGato);
				}

				if(edadGato<=5  && bandera=="nadie")
				{
					nombrePrimerGato=prompt('Ingrese el nombre de su gato');
					//CAMBIO EL VALOR DE LA BANDERA ASI NO ME DEJA INGRESAR OTRA VEZ
					bandera='alguien';
				}
			}


		}

		else //if(mascota=='no') NO HACE FALTA
		{
			contadorNoMascota++;
		}


		if(contador==1)
		{
			edadMasVieja=edad;
		}
		else
		{
			if(edad>edadMasVieja)
			{
				edadMasVieja=edad;
			}
		}

		if(mascota=='no' && edad==edadMasVieja)
		{
			edadMasViejaSinMascota=edadMasVieja;
		}
	
		contador++;
	}

	console.log(nombrePrimerGato); //PARA VERIFICAR


//pensar otras maneras de pedir informacion
//TAREA: NECESITO SABER EL NOMBRE DEL PRIMER GATO QUE SEA DE UNA MUJER MAYOR A 30 AÑOS Y EL GATO NO TENGA MAS DE 5 AÑOS 
//DE EDAD
	


































	 //creo variables
	//var contador=0;

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

	/*var mascota;
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


	}	*/
		 
}//la persona mas vieja que no tenga mascota
// necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de 5 años de edad