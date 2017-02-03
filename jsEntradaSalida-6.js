/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	alert(numeroUno+numeroDos);

	//agregar arriba "var resultado" y luego debajo "resultado=numeroUno+numeroDos" debajo "alert(resultado)"
	//alert(parseInt( numeroUno) +parseInt( numeroDos));
	//mal alert(parseInt( numeroUno + numeroDos));
}

