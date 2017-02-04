/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var terrenoLargo;
	var terrenoAncho;
	//var terrenoRadio;
	terrenoLargo=document.getElementById('Largo').value;
	terrenoAncho=document.getElementById('Ancho').value;
	//terrenoRadio=document.getElementById('Radio').value;
	terrenoLargo=parseInt('Largo');
	terrenoAncho=parseInt('Ancho');
	//terrenoRadio=parseInt('Radio');
	var perimetro=terrenoLargo*2+terrenoAncho*2;
	var alambresTres=perimetro*3
	alert("perimetro de alambres requerido " +alambresTres);

}
function Circulo () 
{
	
}
function Materiales () 
{
	
}