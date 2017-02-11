function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Enero":	
	case "Febrero":		
	case "Marzo":		
	case "Abril":		
	case "Mayo":		
	case "Junio":
		alert("Falta para el invierno.")
		break; //sino pongo nada en los anteriores, me toma el primer alert
	case "Julio":		
	case "Agosto":
		alert("Abrigate que hace frio.")
		break;	
	case "Septiembre":		
	case "Octubre":		
	case "Noviembre":		
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!.")
		break;
}

//alert (mesDelAño);




}//FIN DE LA FUNCIÓN