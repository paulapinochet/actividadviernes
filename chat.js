
function Mensaje(mensaje){
				this.mensaje = desc;
			}

Mensaje.mensajitos = [];

Mensaje.enviar = function(e){
	e.preventDefault(); // previene comportamiento por defecto del formulario
	var mensaje = document.getElementById("title").value;
	var mensajito = new Mensaje(mensaje);

	Mensaje.mensajito.push(mensajito);
	Mensaje.mostrar();
	Mensaje.guardar(); 

}

Mensaje.mostrar = function(){ // metodo de clase
	var comentarios = "";
	Mensaje.mensajito.map(function(elemento, indice){
		comentarios = comentarios + "<article>"+"<h2>" + // arreglar plantilla
		elemento.mensaje + "</h2><p>" + "</p></article>";
	});


document.getElementById("comentarios").innerHTML = comentarios;

}

Mensaje.guardar =function () {
	var mensajes = Mensaje.mensajes;
	var twitsEncode = JSON.stringify(mensajes);
	localStorage.setItem("mensajes", mensajesEncode); // esto toma nuestros twits, los convierte en un string con json y los guarda en el localstorage.
}

Mensaje.obtenerMensajes = function () {
	var mensajesEncoded = localStorage.getItem("mensajes");
	console.log(mensajesEncoded);
	if (mensajesEncoded !=null){ //manejar el error de vacío
	var mensajes = JSON.parse(mensajesEncoded);
	Mensaje.mensajes= mensajes;
};
}


Mensaje.obtenerMensajes();
Mensaje.mostrar();