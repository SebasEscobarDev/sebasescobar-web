/* ésto comprueba la localStorage si ya tiene la variable guardada */
function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies == 'true'){
    cajacookies.style.display = 'none';
  }
}

/* aquí guardamos la variable de que se ha
aceptado el uso de cookies así no mostraremos
el mensaje de nuevo */
function aceptarCookies() {
  localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';
}





$(document).ready(function(){



	/*		COOKIES
	var message = 'Usamos cookies para asegurarnos de brindarle la mejor experiencia en nuestro sitio web. Si continúa utilizando este sitio, asumiremos que está satisfecho con él.',
		btn = 'Política de datos',
		enlace = 'politica.html'

	if( $('#dev-message').length > 0 ){
		message = $('#dev-message').html()
	}

	if( $('#dev-btn').length > 0 ){
		btn = $('#dev-btn').html()
	}

	if( $('#dev-enlace').length > 0 ){
		enlace = $('#dev-enlace').html()
	}


	var bodyCookies = '<div id="cajacookies">'+
		'<p>'+
	'<span>'+message+'</span><br>'+
	'<a onclick="aceptarCookies();">Aceptar</a><a href="'+enlace+'">'+btn+'</a>'+
	'</p>'+
	'</div>'

	var bodyBanner = ''b

	$('body').append(bodyCookies)

  compruebaAceptaCookies();
*/



    $('.menu-top a').click(function(){
		$('.button-navigator').toggleClass('active')
		$('.menu-top').toggleClass('active')
    })

	AOS.init(
		{
			offset: 40,
		  easing: 'ease-in-out', // default easing for AOS animations
		  once: false, // whether animation should happen only once - while scrolling down
		  mirror: false, // whether elements should animate out while scrolling past them
		  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

		}
	);

	//var scene2 = $('#section-services').get(0)
	//var parallax2 = new Parallax(scene2);

	expanden_icon_services()

    funciones_scroll()

	/* Scroll To */
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;
		$("body, html").animate({
			scrollTop: position
		}, 500);
	});


	/* CLICK BOTON PARA CAMBIAR VISTA DE PROYECTOS  */
	$('.btn-vista-pj').click(function(){
		$('.btn-vista-pj').removeClass('active')
		$(this).addClass('active')
		var clases = $(this).attr('data-class')
		$('.contenedor-cards').each(function(){
			$(this).attr('class', 'contenedor-cards '+clases)
		})
	})


	/* MIN-HEIGHT SKILLSET */
	var al = 0;
	//console.log( '////////////' )
	var count = $('.skillset').length
	$('.skillset')
		.each( function(i,obj){
			var al2 = $(this).height()
			if( al2 > al ){
				al = al2
			}
			if( !--count ){
				updateHeight_skillSet(al)
			}
		})
	function updateHeight_skillSet(al){
		$('.skillset svg').height(al)
		//console.log('%c'+al , "color: green; font-size:25px;")
	}

	var widthNavigator = window.innerWidth;
	var heightNavigator = window.innerHeight;
	if( widthNavigator < 591 ){
		$('#tt-skills, #title-left-skills, #title-right-skills').html('HABILIDADES')
	}

	//menu sticky
	$(window).scroll(function(){
	  scrollissimo.knock();
	});

	//typed animation
	setTimeout( function(){
		var options = {
			  strings: [
			  	'&#60; Desarrollo de Landing Pages />', 
			  	'&#60; Desarrollo de Tiendas Virtuales  />',
			  	'&#60; Mejora Tu Page Speed ( Google ) />', 
			  	'&#60; Desarrollo de Plugins />', 
			  	'&#60; Potencia lo que ya eres con tu Marca en INTERNET. />' 
			  ],
			  typeSpeed: 40
			};
		var typed = new Typed('.element', options);
	}, 3000 )

	$('.flip-card').click(function(){
		$('.flip-card').removeClass('active');
		$(this).addClass('active')
	})

	//VER PROJECTOS
	show_projects()


	$('.animation-slide').click(function(){
		hide_full_slide_right()
	})

	setTimeout(function(){
		funciones_servicios()
	},1000)



	$('#sendForm').click(function(){

		var validarCampos = 0;
		var sshval = 0;
		$('#frmContacto input').each(function(i,obj){
			if( $(this).val() == '' || 
					$(this).val() == undefined || 
					$(this).val() == 0 ){
				$(obj).css({'border-bottom':'1px solid red', 'background':'lightred'})
				validarCampos++
			}

			if( $(this).val().indexOf('>')  > -1 || 
					$(this).val().indexOf('<')  > -1 ||
					$(this).val().indexOf('?')  > -1 ||
					$(this).val().indexOf('script') > -1  ||
					$(this).val().indexOf('FROM') > -1  || 
					$(this).val().indexOf('SELECT') > -1  ||
					$(this).val().indexOf('from') > -1  || 
					$(this).val().indexOf('select') > -1  ){
				$(obj).css({'border-bottom':'1px solid red', 'background':'lightred'})
				sshval++;
			}
		})

		$('#frmContacto textarea').each(function(i,obj){
			if( $(this).val() == '' || 
					$(this).val() == undefined || 
					$(this).val() == 0 ){
				$(obj).css({'border-bottom':'1px solid red', 'background':'lightred'})
				validarCampos++
			}

			if( $(this).val().indexOf('>')  > -1 || 
					$(this).val().indexOf('<')  > -1 ||
					$(this).val().indexOf('?')  > -1 ||
					$(this).val().indexOf('script') > -1  ||
					$(this).val().indexOf('FROM') > -1  || 
					$(this).val().indexOf('SELECT') > -1  ||
					$(this).val().indexOf('from') > -1  || 
					$(this).val().indexOf('select') > -1  ){
				$(obj).css({'border-bottom':'1px solid red', 'background':'lightred'})
				sshval++;
			}
		})


		if( validarCampos ){
			Swal.fire({
			  title: 'Error!',
			  text: 'Ingrese Todos los Campos Del Formulario Para Enviar',
			  icon: 'error',
			  confirmButtonText: 'Ok!'
			})
		}

		if( sshval ){
			Swal.fire({
			  title: 'Error!',
			  text: 'No puede Ingresar caracteres prohibidos.',
			  icon: 'error',
			  confirmButtonText: 'Ok!'
			})
		}

		if( validarCampos || sshval ){
		}else{
			send_form()
		}

	})

	$('.button-navigator').click(function(){
		$(this).toggleClass('active')
		$('.menu-top').toggleClass('active')
	})


})


function expanden_icon_services(){
	let items = $('.dev-details-serv').length
	items--;
	let altoDetail = 0;
	$('.dev-details-serv').each(function(i,obj){
		var alto = $(this).height()
		if( alto > altoDetail ){
			altoDetail = alto
		}
		if( items == i ){
			$('.dev-details-serv').parent().css('height', (altoDetail+30)+'px')
		}
	})
	//$('.dev-details-serv p').hide()

	// $('.dev-details-serv').hover(
	//   function() {
	// 		$(this).addClass('active')
	// 		$(this).children('p').show("fast")
	//   }, function() {
	//   	$(this).children('p').hide("fast")
	// 		$(this).removeClass('active')
	//   }
	// );

	// $('.dev-details-serv').click(function(){
	// 	if( $(this).hasClass('active') ){
	// 		$(this).children('p').hide('fast')
	// 		$(this).removeClass('active')
	// 	}else{
	// 		$(this).addClass('active')
	// 		$(this).children('p').show("fast")
	// 	}
	// })

}

function menu_sticky(){
	var scrollMove = 0;
	$(window).scroll(function(){
	  var scrollNow = $(this).scrollTop()
		if( scrollNow < scrollMove ){
			if ( scrollNow >= $('#section-banner').height() ){
			  //Muestra al otro <div>
			  $('header').addClass('active')
			}else{
			  //Lo oculta
			  $('header').removeClass('active')
			}
		}else{
			  $('header').removeClass('active')
		}
		scrollMove = scrollNow
	});
}

function funciones_servicios(){
	let alto = 0;
	let altoh1 = 0;
	let items = $('.dev-details-serv').length
	items--;
	$('.dev-details-serv').each(function(i,obj){

		$(this).children('h1').attr('data-before', $(this).children('h1').height()+20)
		if( $(this).children('h1').height() > altoh1 )
			altoh1 = $(this).children('h1').height()

		if( i == items ){
			//$('.dev-details-serv').height(alto)
			$('.dev-details-serv h1').height(altoh1)
			//$('.dev-details-serv .box-pict-dev > img').height(altoimg)
		}
	})


	//function padd-h1-serrvices
	setTimeout(function(){
		var altos = [];
		$('h1[data-before]').each(function(){
			var beforee = $(this).attr('data-before');
			var heightt = $(this).height();
			var paddtop = ( heightt - beforee ) / 2
			$(this).css('padding-top', paddtop+'px')
			if( !altos.includes(beforee) ){
				altos.push(beforee)
			}
		})
	},700)

}


function show_projects(){

	$('.flip-card-back button').click(function(ev){

		var href = $(this).attr('data-href')
		var short = $(this).attr('data-short')
		
		//hide principal page
		$('body #first-page').removeClass('init-animation')
		$('body').removeClass('init-animation')
		//$('#first-page').hide()
		let svgArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">'+
  		'<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>'+
  		'<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>'+
			'</svg>';

		var enlace = '<a href="'+href+'" target="_blank">'+svgArrow+''+href+'</a>'
		var titulo = $(this).parent('.flip-card-back').children('h1').html()
		var tag = $(this).parent('.flip-card-back').children('p').html()
		//construir pagina
		var txtPages='';
		var counter = 0;
		$(this).parent('.flip-card-back').children('.pages').each(function(){
			var titlePage = $(this).attr('data-title')
			var urlImagen = '/images/proyectos/paginas/'+$(this).attr('data-folder') +'/'+ $(this).attr('data-item')
			var txtPage = '<h2>'+titlePage+'</h2>'+
				'<img src="'+urlImagen+'" alt="'+titlePage+'" />'
			txtPages += '<div class="obj-banner">'+txtPage+'</div>'
		})


		var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">'+
		  '<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>'+
		'</svg>'


		var page = '<div class="container-pages">'+
			'<div class="row">'+
				'<div class="volver-portafolio"><button id="btnBackProjects" onclick="volver_projects()">'+svg+'</button></div>'+
				'<div class="col-lg-12 col-md-12 col-12 col-sm-12 col-12 banner-title">'+
					'<h1>'+titulo+'</h1>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-12 col-sm-12 col-12 banner-page-item '+short+'">'+
					txtPages+
				'</div>'+
				'<div class="col enlace-items">'+
					'<div class="item-links">'+
						'<a name="expert" ><span color="#00f900">>.</span> @developer Sebas Escobar.</a>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'

		//SECOND PAGE
		$('#second-page').html(page)
		//$('#second-page').show()
		$('#second-page').addClass('active')

		$('body #first-page').hide()
		//animacion cambio de pagina
		show_full_slide_left()
		setTimeout(function(){
			hide_full_slide_right()
			$('#second-page').show()
		},1000)

		setTimeout(function(){
	  	$("body, html").animate({
				scrollTop: 0
			}, 2000);
		},1000)

	})
}


function funciones_scroll(){
	//FUNCIONES SCROLL
	var widthNavigator = window.innerWidth;
	var heightNavigator = window.innerHeight;
	// console.log('%cAlto inner: '+heightNavigator , "color: green; font-size:40px;")
	// console.log('%cWidth inner: '+widthNavigator , "color: purple; font-size:40px;")
	// console.log('_______________________________________________________________________________')
  var durationAnimation = 5000;

	/* #############################
	*	SCROLL SECTION 1
	*/
	// for( let i = 0; i <= 8; i++ ){
	// 	let divyTween;
	// 	if( i <= 4 ){
	// 		divyTween = TweenLite.to( $('#animarObj'+i), durationAnimation,
	// 	  		{ x: -(widthNavigator+(widthNavigator/2)), opacity: 0 }
	// 	  	);
	// 	}else{
	// 		divyTween = TweenLite.to( $('#animarObj'+i), durationAnimation,
	// 	  		{ x: +(widthNavigator+(widthNavigator/2)), opacity: 0 }
	// 	  	);
	// 	}

	// 	scrollissimo.add(divyTween, 0, heightNavigator);
	// }

	// var divyTween = TweenLite.to( $('#logo-banner'), durationAnimation, 
	// 	{y: +(heightNavigator +(heightNavigator/0.7)), opacity:0 }
	// );

	// scrollissimo.add(divyTween, 0 , heightNavigator);


	var divyTween = TweenLite.to( $('#first-title'), (durationAnimation-2500), 
		{ y: -(heightNavigator/2), opacity: 0 }
	);

	scrollissimo.add(divyTween,0,heightNavigator);

    // var divyTween = TweenLite.to( $('#logo-banner'), (durationAnimation-2500), 
	// 	{ y: -(heightNavigator/2), opacity: 0 }
	// );

	// scrollissimo.add(divyTween,0,heightNavigator);
	/*
		*	END SECTION 1
	############################# */


	//tiempo de espera para calcular posiciones de segunda seccion en adelante automaticamente :D !
	setTimeout(function(){

		/* #############################
		*	SCROLL SECTION 2
		*/

		var altura1 = $('#section-portfolio').offset().top-450;
		var altura2 = $('#section-portfolio').offset().top;

		var divyTween = TweenLite.to( $('#title-left'), durationAnimation,
	  		{ x: +(widthNavigator), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);

		var divyTween = TweenLite.to( $('#title-right'), durationAnimation,
	  		{ x: -(widthNavigator), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);

		var incrementador = 5;
		var conteo = 0;
		
		$('.box-computer').each(function(i,obj){
			var divyTween = TweenLite.to( $(obj).children('img'), ( (durationAnimation+2000)+incrementador ),
		  		{ y: -900 }
		  	);
			if( conteo == 3 ){
				altura1+=300
				altura2+=300
				conteo = 0;
			}
			scrollissimo.add(divyTween, altura1, altura2);

			incrementador+=incrementador;
			conteo++;
		})

		/*
			*	END SECTION 2
		############################# */


		/* #############################
			*	SCROLL SECTION 4 SKILLS
		*/
		var altura1 = $('#section-skills').offset().top - 450 ;
		var altura2 = $('#section-skills').offset().top;
		//#title-left
		var divyTween = TweenLite.to( $('#title-left-skills'), durationAnimation,
	  		{ x: +(widthNavigator-400), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);

		var divyTween = TweenLite.to( $('#title-right-skills'), durationAnimation,
	  		{ x: -(widthNavigator-400), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);


		/*
			*	END SECTION 4
		############################# */


		/* #############################
			*	SCROLL SECTION 5 SKILLS
		*/
		var altura1 = $('#section-services').offset().top - 450 ;
		var altura2 = $('#section-services').offset().top;
		//#title-left
		var divyTween = TweenLite.to( $('#title-left-services'), durationAnimation,
	  		{ x: +(widthNavigator-600), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);

		var divyTween = TweenLite.to( $('#title-right-services'), durationAnimation,
	  		{ x: -(widthNavigator-600), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);
		/*
			*	END SECTION 5
		############################# */



		/* #############################
			*	SCROLL SECTION 6
		*/
		//debug position footer section for scroll title
		//console.log( '%c'+$('#section-footer').offset().top , "color: green; font-size:20px;" );

		var altura1 = $('#section-footer').offset().top - 450 ;
		var altura2 = $('#section-footer').offset().top;
		var divyTween = TweenLite.to( $('#title-left-foot'), durationAnimation,
	  		{ x: +(widthNavigator-400), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);

		var divyTween = TweenLite.to( $('#title-right-foot'), durationAnimation,
	  		{ x: -(widthNavigator-400), opacity: 0 }
	  	);
		scrollissimo.add(divyTween, altura1, altura2);



	},1200)

	//#title-left
	/*
		*	END SECTION 6
	############################# */

}


function volver_projects(){
	// console.log('clicks')
	//$('#second-page').hide()
	//animacion cambio de pagina
	show_full_slide_left()
	$('body #first-page').show()

	setTimeout(function(){
  	$("body, html").animate({
			scrollTop: $('#section-portfolio').offset().top
		}, 1200);
		$('#second-page').hide()
		$('#second-page').removeClass('active')
		hide_full_slide_right()
	},1000)

	setTimeout(function(){
		$('#second-page').html('')
		$('body #first-page').addClass('init-animation')
		$('body').addClass('init-animation')
	},1000)
	//$('#first-page').show()
}

function hide_full_slide_right(){
	$('#left-first-load-page').addClass('init-animation')
	$('#left-second-load-page').addClass('init-animation')
	$('#left-third-load-page').addClass('init-animation')
}

function show_full_slide_left(){
	$('#left-first-load-page').removeClass('init-animation')
	$('#left-second-load-page').removeClass('init-animation')
	$('#left-third-load-page').removeClass('init-animation')
}


function send_form(){
	var data = {
		name: $('#fullname').val(),
		email: $('#email').val(),
		asunto: $('#asunto').val(),
		message: $('#message').val(),
	}
	$.ajax({
    url: 'form.php',
    method: 'POST',
    data: data ,
    success: function(result){
    	if( result.msj )
    		//console.log(result.msj)

			$('#fullname').val('')
			$('#email').val('')
			$('#asunto').val('')
			$('#message').val('')
    	Swal.fire({
			  title: 'Enviado!',
			  text: 'Gracias por su mensaje, Me pondré en contacto en las proximas horas! ó escriba directamente al whatsapp: +57 314 840 6835',
			  icon: 'success',
			  confirmButtonText: 'Ok Bro!'
			})


			
    },
    error: function(i){
      //console.log(i)
      Swal.fire({
			  title: 'Error!',
			  text: 'Ha ocurrido un error inesperado, no ha sido posible enviar su mensaje, escribame directamente al whatsapp: +57 314 840 6835',
			  icon: 'error',
			  confirmButtonText: 'Ok Bro!'
			})
    }
  });
}

