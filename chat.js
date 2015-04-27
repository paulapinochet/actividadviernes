function Mensaje(chat){
				this.chat = chat;
			}

Mensaje.mensajes = [];

Mensaje.enviar = function(e){
	e.preventDefault(); // previene comportamiento por defecto del formulario
	var mensaje = document.getElementById("title").value;
	var mensajito = new Mensaje(mensaje);

	Mensaje.mensajes.push(mensajito);
	Mensaje.mostrar();
	Mensaje.guardar(); 

}

Mensaje.mostrar = function(){ // metodo de clase
	var conversacion = "";
	Mensaje.mensajes.map(function(elemento, indice){
		conversacion = conversacion + "<p>" + elemento.chat + "</p>"
	 ;
	});


document.getElementById("conversacion").innerHTML = conversacion;

}

Mensaje.guardar =function () {
	var mensajes = Mensaje.mensajes;
	var mensajesEncode = JSON.stringify(mensajes);
	localStorage.setItem("mensajes", mensajesEncode); 
}

Mensaje.obtenerMensajes = function () {
	var mensajesEncoded = localStorage.getItem("mensajes");
	console.log(mensajesEncoded);
	if (mensajesEncoded !=null){ //manejar el error de vacío
	var mensajes = JSON.parse(mensajesEncoded);
	Mensaje.mensajes= mensajes;
};
}


// Mensaje.obtenerMensajes();
Mensaje.mostrar();