<section id="section-portfolio">

	<div class="container">

		<div class="row">

			<div class="col-md-12 text-center title-first" data-aos="fade-up" data-depth="0.4">

				<h1 class="title-general" id="tt-general">PROYECTOS</h1>

				<h1 class="title-copy" id="title-left">PROYECTOS</h1>

				<h1 class="title-copy" id="title-right">PROYECTOS</h1>

			</div>

			<div class="col-md-12">

				<br>

				<br>

				<br>

				<div id="btnsVistas">

					<h6>Number of views in section</h6>

					<div class="btn-group btn-group-toggle" data-toggle="buttons">

					  <button class="btn-vista-pj btn btn-secondary" data-class="col-lg-12 col-md-12 col-sm-12 col-12">

					    <span></span>

					  </button>

					  <button class="btn-vista-pj btn btn-secondary" data-class="col-lg-6 col-md-6 col-sm-6 col-6">

					    <span></span>

					    <span></span>

					  </button>

					  <button class="btn-vista-pj btn btn-secondary active" data-class="col-lg-4 col-md-4 col-sm-4 col-4">

					    <span></span>

					    <span></span>

					    <span></span>

					  </button>

					  <button class="btn-vista-pj btn btn-secondary" data-class="col-lg-3 col-md-3 col-sm-3 col-3">

					    <span></span>

					    <span></span>

					    <span></span>

					    <span></span>

					  </button>

					</div>

				</div>

			</div>

					



			<div class="col-lg-12 col-md-12 col-sm-12 col-12" id="section-projects">

				<div class="row">



			<?php 



			$proyectos = [
					/*
				['short' => 'Bernardo', 'name' => 'Bernardo Castrillón', 'url' => 'http://bernardocastrillon.com/', 'img' => 'images/proyectos/paginas/mini/bernardocastrillon.jpg', 'rol' => 'Web Developer', 'desc' => 'client landing web page for a Plastic Surgeon of the city of Medellín.', 'pages'=>

					[

						[ 

							'item' => '1.jpg', 

							'folder' => 'bernardo',

							'title' => 'Página de Inicio'

						],

						[ 

							'item' => '2.jpg', 

							'folder' => 'bernardo',

							'title' => 'Dr. Bernardo Castrillón'

						],

						[ 

							'item' => '3.jpg', 

							'folder' => 'bernardo',

							'title' => 'Cirugía Estética Facial'

						],

						[ 

							'item' => '4.jpg', 

							'folder' => 'bernardo',

							'title' => 'Cirujgía Estética Corporal'

						],

						[ 

							'item' => '5.jpg', 

							'folder' => 'bernardo',

							'title' => 'Cirugía Reconstructiva'

						],

						[ 

							'item' => '6.jpg', 

							'folder' => 'bernardo',

							'title' => 'Cirugía Maxilofacial'

						],

						[ 

							'item' => '7.jpg', 

							'folder' => 'bernardo',

							'title' => 'Cirugía de mano'

						],

						[ 

							'item' => '8.jpg', 

							'folder' => 'bernardo',

							'title' => 'Otros Procesos'

						],

						[ 

							'item' => '9.jpg', 

							'folder' => 'bernardo',

							'title' => 'Recomendaciones'

						],

						[ 

							'item' => '10.jpg', 

							'folder' => 'bernardo',

							'title' => 'Contacto'

						]

					]

				],

				*/


				['short' => 'Coach', 'name' => 'Coaching App', 'url' => 'http://masterapk.sebasescobar.com', 'img' => 'images/proyectos/paginas/mini/masterapk.jpg', 'rol' => 'Architect & Engineer', 'desc' => 'Application for use reserved for Professional Coaching agency', 'pages' => [

						[

							'item' => '5.jpg', 

							'folder' => 'masterapk',

							'title' => 'Login'

						],

						[ 

							'item' => '4.jpg', 

							'folder' => 'masterapk',

							'title' => 'Pagina De Inicio'

						],

						[ 

							'item' => '1.jpg', 

							'folder' => 'masterapk',

							'title' => 'Lista de contactos'

						],

						[

							'item' => '2.jpg', 

							'folder' => 'masterapk',

							'title' => 'Creacion de contactos'

						],

						[ 

							'item' => '3.jpg', 

							'folder' => 'masterapk',

							'title' => 'Creación de facturaciones'

						]

					]

				],

				['short' => 'Historias', 'name' => 'Gestión De Hsitorias Clinicas', 'url' => 'http://historia.sebasescobar.com', 'img' => 'images/proyectos/paginas/mini/historias.jpg', 'rol' => 'Architect & Engineer', 'desc' =>'Medical history system for doctors to keep their patient report and medical history', 'pages' =>[

						[ 

							'item' => '1.jpg', 

							'folder' => 'historias',

							'title' => 'Login'

						],

						[ 

							'item' => '2.jpg', 

							'folder' => 'historias',

							'title' => 'Lista de Profesionales'

						],

						[ 

							'item' => '3.jpg', 

							'folder' => 'historias',

							'title' => 'Registro de Profesionales'

						],

						[ 

							'item' => '4.jpg', 

							'folder' => 'historias',

							'title' => 'Ver Profesional'

						],

						[ 

							'item' => '5.jpg', 

							'folder' => 'historias',

							'title' => 'Lista de Pacientes'

						],

						[ 

							'item' => '6.jpg', 

							'folder' => 'historias',

							'title' => 'Registro de Pacientes'

						],

						[ 

							'item' => '7.jpg', 

							'folder' => 'historias',

							'title' => 'Historias Clínicas'

						],

						[ 

							'item' => '8.jpg', 

							'folder' => 'historias',

							'title' => 'Seleccionar Paciente'

						],

						[ 

							'item' => '9.jpg', 

							'folder' => 'historias',

							'title' => 'Historia Clínica'

						],

						[ 

							'item' => '10.jpg', 

							'folder' => 'historias',

							'title' => 'Procedimientos Historia Clínica'

						],

						[ 

							'item' => '11.jpg', 

							'folder' => 'historias',

							'title' => 'Ordenes Médicas'

						],

						[ 

							'item' => '12.jpg', 

							'folder' => 'historias',

							'title' => 'Incapacidades Médicas'

						]

					]

				],


				
				['short' => 'Acarreos', 'name' => 'Acarreos Económicos', 'url' => 'http://acarreoseconomicos.com/', 'img' => 'images/proyectos/paginas/mini/acarreoseconomicos.jpg', 'rol' => 'Web Developer', 'desc' => 'Website for a <b> Hauling </b> company located in the city of Manizales', 'pages' =>[

						[ 

							'item' => '1.jpg', 

							'folder' => 'acarreos',

							'title' => 'Home Page'

						]

					]

					

				],


				['short' => 'Xenia', 'name' => 'Historia Clinica Xenia', 'url' => 'http://historiaclinicaxenia.com/index.php', 'img' => 'images/proyectos/paginas/mini/historiaclinicaxenia.jpg', 'rol' => 'Software Developer', 'desc' => 'Website to sell medical software, from the company of medical associates.', 'pages' => [

						[ 

							'item' => '1.jpg', 

							'folder' => 'xenia',

							'title' => 'Pagina De Inicio'

						]

					]

				],



				['short' => 'Urotienda', 'name' => 'Urotienda', 'url' => 'http://www.urotienda.com/?page_id=15', 'img' => 'images/proyectos/paginas/mini/urotienda.jpg', 'rol' => 'Web Developer', 'desc' => 'Website to sell products for medical use, occasional and professional equipment', 'pages' => [

						[ 

							'item' => '1.jpg', 

							'folder' => 'urotienda',

							'title' => 'Pagina De Inicio'

						]

					]

				],
				
				['short' => 'Uroclamp', 'name' => 'Uroclamp', 'url' => 'http://uroclamp.com/inicio/', 'img' => 'images/proyectos/paginas/mini/uroclamp.jpg', 'rol' => 'Web Developer', 'desc' => 'Sale of medical device for Urinary Incontinence, more information on the link.', 'pages' => [

						[ 

							'item' => '1.jpg', 

							'folder' => 'uroclamp',

							'title' => 'Pagina De Inicio'

						]

					]

				],


                /*
				['short' => 'CVitae', 'name' => 'Curriculum Vitae', 'url' => 'http://cv.sebasescobar.com', 'img' => 'images/proyectos/paginas/mini/cv.jpg', 'rol' => 'Personal Portfolio', 'desc' => 'Portfolio web page HTML5 CSS3 JAVASCRIPT AND PHP NATIVE LANGUAGES', 'pages' => [

						[ 

							'item' => '1.jpg', 

							'folder' => 'cv',

							'title' => 'Pagina de Presentación'

						]

					] 

				],



				['short' => 'Trasteos', 'name' => 'Trasteos baratos', 'url' => 'https://www.trasteosbaratos.com', 'img' => 'images/proyectos/paginas/mini/trasteosbaratos.jpg', 'rol' => 'Web Developer', 'desc' => 'Company information website Trasteos Baratos en  Manizales', 'pages' => [

						[ 

							'item' => '1.jpg', 

							'folder' => 'trasteosbaratos',

							'title' => 'Pagina de inicio'

						]

					] 

				],
*/

				/*
				['short' => 'TrasteosManizales', 'name' => 'Trasteos Manizales', 'url' => 'https://www.trasteosmanizales.com', 'img' => 'images/proyectos/paginas/mini/trasteosmanizales.jpg', 'rol' => 'Web Developer', 'desc' => 'Company information website Trasteos Manizales', 'pages' => [

						[ 

							'item' => '1.jpg', 

							'folder' => 'trasteosmanizales',

							'title' => 'Pagina de inicio'

						]

					] 

				],
				*/


				/*

				['short' => 'SebasEscobar', 'name' => 'Sebas Escobar', 'url' => 'https://www.sebasescobar.com', 'img' => 'images/proyectos/paginas/mini/sebasescobar.jpg', 'rol' => 'Architect & Software Engineer', 'desc' => 'Personal Page to show all projects in which I have collaborated '],

				*/









			];



			for ($i=0; $i < count($proyectos); $i++) {  ?>





				<div class="col-lg-4 col-md-4 col-sm-6 col-6 contenedor-cards" data-aos="fade-up" data-depth="0.4">

					<div class="flip-card">

					  <div class="flip-card-inner">

					    <div class="flip-card-front" id="front-<?=$i;?>">

					    	<div class="box-img">

					      	<!-- img src="<?php /* echo $proyectos[$i]['img']; */ ?>" style="position: absolute;left: 0px;" -->

									<div class="box-computer">

										<img src="<?php echo $proyectos[$i]['img']; ?>">

									</div>

					    	</div>

					    </div>

					    <div class="flip-card-back">

					      <h1><?php echo $proyectos[$i]['name']; ?></h1> 

					      <p>#<?php echo $proyectos[$i]['rol']; ?></p>

				      	<?php

			      		foreach( $proyectos[$i]['pages'] as $page ){ ?>

						      <div class="pages"

						      	data-item="<?php echo $page['item']; ?>" 

						      	data-folder="<?php echo $page['folder']; ?>"

						      	data-title="<?php echo $page['title']; ?>"

						      	></div>

				      	<?php } ?>

					      <button data-href="<?php echo $proyectos[$i]['url']; ?>" data-short="<?php echo $proyectos[$i]['short']; ?>">

					      	<span>Más Información</span>

									<?php include 'svgs/arrows-full-screen.php'; ?>

								</button>

					    </div>

					  </div>

					</div>

				</div>



			<?php }; ?>

				</div>

			</div>	

			<!-- #/end section projects  -->





		</div>

	</div>

</section>