/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*var resultado;
	resultado= 2 % 10;
	alert(resultado);
	resultado= 10 % 2
	alert(resultado);*/







	var numeroDividendo, numeroDivisor;
 	numeroDividendo=document.getElementById('numeroDividendo').value;
 	numeroDivisor=document.getElementById('numeroDivisor').value;
 	numeroDividendo=parseInt(numeroDividendo);
 	numeroDivisor=parseInt(numeroDivisor);
 	var resto=numeroDividendo%numeroDivisor;
 	alert("El resto es "+resto);
 	//division simbolo a  /
  	//para mostrar el resto %
}
