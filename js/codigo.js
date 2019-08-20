// Cuando hayas encontrado los errores, desactiva este ALERT.
// alert("Hay DOS ERRORES que impiden que una función se ejecute\ncuando haces click en el botón 'VER HORA ACTUAL'\n\n¡Corrige estos errores analizando el código!");

function verHora(){
	var fecha = new Date();
	var hora = fecha.getHours();
	document.getElementById('ver_mensaje').style.display = "block";
	document.getElementById('ver_mensaje').style.border = "1px solid black";
	document.getElementById('ver_mensaje').style.backgroundColor = "orange";
	document.getElementById('ver_mensaje').style.boxShadow = "5px 5px 3px #888888";
	document.getElementById('ver_mensaje').innerHTML = "Son las " + hora + " horas";
}

function ocultarHora(){
	document.getElementById('ver_mensaje').style.display = "none";
}

function calcularGeneracion() {
	var nombreUsuario = document.getElementById('nombre').value;
	var anyoUsuario = document.getElementById('nacimiento').value;
	var todo_correcto = true;

if (nombreUsuario.length < 3) {
		document.getElementById('errorNombre').innerHTML = "No puedes dejar este campo vacío<br>Debe tener más de 3 letras";
		todo_correcto = false;
	} else document.getElementById('errorNombre').innerHTML = " ";

var patron1 = /^[0-9]{4}$/;
	if (!patron1.test(anyoUsuario)) {
		document.getElementById('errorAnyo').innerHTML = "La edad debe contener 4 números";
		todo_correcto = false;
	} else 
		document.getElementById('errorAnyo').innerHTML = " ";

var generacion;
if ((todo_correcto) && (anyoUsuario < 1945))
	generacion = "Sin Nombre";
else if ((todo_correcto) && ((anyoUsuario >= 1946) && (anyoUsuario <= 1964)))
	generacion = "Baby Boomers";
else if ((todo_correcto) && ((anyoUsuario >= 1965) && (anyoUsuario <= 1979)))
	generacion = "X";
else if ((todo_correcto) && ((anyoUsuario >= 1980) && (anyoUsuario <= 1999)))
	generacion = "Millenials";
else if ((todo_correcto) && (anyoUsuario >= 2000))
	generacion = "Generación Z";

if (todo_correcto)
document.getElementById('txtSolucion').innerHTML = "¡" + nombreUsuario + ", perteneces a la <strong>generación "+ generacion + "</strong>!"
else 
	document.getElementById('txtSolucion').innerHTML = " ";
}

function resetear(){
	nombreUsuario = " ";
	anyoUsuario = " ";
}




