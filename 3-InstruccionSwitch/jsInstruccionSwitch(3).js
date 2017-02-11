function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño){
	/*case "Enero":
	alert("Este mes tiene 30 de más días")
	break;*/
	case "Febrero":
		alert("Este mes no tiene más de 29 días");
		break;
default:
	alert("Este mes tiene más de 30 días");	
	

	/*case "Marzo":
	case "Abril":		
	case "Mayo":		
	case "Junio":		
	case "Julio":		
	case "Agosto":		
	case "Septiembre":		
	case "Octubre":		
	case "Noviembre":		
	case "Diciembre":
	alert("Este mes tiene más de 30 días")*/ //no esta mal, pero lo reemplazo con default:
}
	
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN