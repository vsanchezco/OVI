/**
* La imagen va desapareciendo de abajo a arriba. 
*/
function slideshow_vertical1 () {
	setInterval(function (){
		$imagenMostrada = $(".contenedor .slide:last-child");
				
		$imagenMostrada.animate({height: "0px"},2000,function() {
			$imagenMostrada.prependTo(".contenedor");
		});

		$imagenMostrada.animate({height: "200px"},0);
	}, 5000);
}


/**
* Funcion para hacer slideshows con desplazamientos y/o desvanecimientos.
*
* desp_hor: Desplazamiento horizontal en pixeles (validos valores positivos y negativos).
* desp_vert: Desplazamiento vertical en pixeles (validos valores positivos y negativos).
* opacidad: Opacidad minima que se quiere conseguir (entre 0 y 1). 
* tmp_animacion: Duracion de la animacion del desplazamiento y/o desvanecimiento (en milisegundos).
* tmp_imagen: Tiempo que transcurre hasta que se cambia la imagen (en milisegundos).
*/
function slideshow (desp_hor, desp_vert, opacidad, tmp_animacion, tmp_imagen) {
	setInterval(function (){
		$imagenMostrada = $(".contenedor .slide:last-child");
		$imagenMostrada.animate(
			{top: desp_hor, left: desp_vert, opacity:opacidad}, // Propiedades que se animan
			tmp_animacion, // Tiempo que dura la animacíon
			function() { // Se ejecuta cuando termina la animacion
				$imagenMostrada.prependTo(".contenedor"); // Coloca la ultima imagen en la primera posicion
			}
		);
			
		$imagenMostrada.animate({top: '0px', left: '0px', opacity:'1'},0); // Restaura a los valores por defecto 
	}, tmp_imagen);
}



/**
* Funcion para hacer slideshows con desplazamientos y/o desvanecimientos.
*
* desp_hor: Desplazamiento horizontal en pixeles (validos valores positivos y negativos).
* desp_vert: Desplazamiento vertical en pixeles (validos valores positivos y negativos).
* opacidad: Opacidad minima que se quiere conseguir (entre 0 y 1). 
* tmp_animacion: Duracion de la animacion del desplazamiento y/o desvanecimiento (en milisegundos).
* tmp_imagen: Tiempo que transcurre hasta que se cambia la imagen (en milisegundos).
*/
function slideshow (desp_hor, desp_vert, opacidad, tmp_animacion, tmp_imagen) {
	var temporizador;
	function animar(){
		temporizador = setInterval(function (){
			$imagenMostrada = $(".contenedor .slide:last-child");
			$imagenMostrada.animate(
				{top: desp_hor, left: desp_vert, opacity:opacidad}, // Propiedades que se animan
				tmp_animacion, // Tiempo que dura la animacíon
				function() { // Se ejecuta cuando termina la animacion
					$imagenMostrada.prependTo(".contenedor"); // Coloca la ultima imagen en la primera posicion
				}
			);
			
			$imagenMostrada.animate({top: '0px', left: '0px', opacity:'1'},0); // Restaura a los valores por defecto 
		}, tmp_imagen);
	}

	// Pausa el slideshow cuando se pone el cursor sobre las imagenes
	$(".slide").hover(
		function(){
			clearInterval(temporizador);
		},
		function(){
			animar();
		}
	);

	// Comienza la animación
	animar();
}


/**
* Las imagenes se desplazan horizontalmente
*/
function slideshow_horizontal () {
	$(".contenedor").addClass( "horizontal");
	setInterval(function (){
		$imagenMostrada = $(".contenedor .slide:first-child");
				
		$imagenMostrada.animate({width: "0px"},2000,function() {
			$imagenMostrada.appendTo(".contenedor");
		});
		$imagenMostrada.animate({width: "600px"},0);
   	}, 3000);
}

/**
* Las imagenes se desplazan verticalmente
*/
function slideshow_vertical () {
	$(".contenedor").addClass( "vertical");
	setInterval(function (){
		$imagenMostrada = $(".contenedor .slide:first-child");
				
		$imagenMostrada.animate({height: "0px"},2000,function() {
			$imagenMostrada.appendTo(".contenedor");
		});
		$imagenMostrada.animate({height: "200px"},0);
   	}, 3000);
}