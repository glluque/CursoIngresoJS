/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var largoAlambre=3*((parseInt(largo)*2)+(parseInt(ancho)*2));
	alert("Son requeridos "+largoAlambre+" metros de alambre.");
	//parseFloat tirara numeros con coma, en lugar de paseInt que tira numeros enteros
	
	//Formulado en parte al que hizo el usuario HidalgoS2207

	/*var terrenoLargo;
	var terrenoAncho;
	//var terrenoRadio;
	terrenoLargo=document.getElementById('Largo').value;
	terrenoAncho=document.getElementById('Ancho').value;
	//terrenoRadio=document.getElementById('Radio').value;
	terrenoLargo=parseInt(terrenoLargo);
	terrenoAncho=parseInt(terrenoAncho);
	//terrenoRadio=parseInt('Radio');
	var perimetro=2*terrenoLargo+2*terrenoAncho;
	var alambreTres=perimetro*3;
	alert("Son requeridos "+alambreTres+" metros de alambre");
	//NaN en js es Not a number
	//el NaN era porque estaba indicando el parseInt "Largo" en lugar de terrenoLargo, lo mismo con terrenoAncho*/

}
function Circulo () 
{
	var radio=document.getElementById('Radio').value;
	var largoAlambre=3*(parseInt(radio)*parseInt(radio)*3.14);
	alert("Son requeridos "+largoAlambre+" metros de alambre.");

	//Formulado en parte al que hizo el usuario HidalgoS2207

	/*var terrenoRadio;
	terrenoRadio=document.getElementById('Radio').value;
	terrenoRadio=parseInt(terrenoRadio);
	var diametro=terrenoRadio*terrenoRadio;
	var circunferencia= diametro*3.14;
	alert("Son requeridos "+circunferencia+" metros de alambre");
	//no olvidar poner + para concatenar*/

}
function Materiales () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var metrosCuadrados=(parseInt(largo))*(parseInt(ancho));
	var cemento=metrosCuadrados*2;
	var cal=metrosCuadrados*3;
	alert("La cantidad a utilizar es "+cemento+" bolsas de cemento y "+cal+" de cal.")

	//Formulado en parte al que hizo el usuario HidalgoS2207
}