<footer id="section-footer" class="footer">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center title-first">
				<h1 class="title-general">CONTACTO</h1>
				<h1 class="title-copy" id="title-left-foot">CONTACTO</h1>
				<h1 class="title-copy" id="title-right-foot">CONTACTO</h1>
			</div>
			<div class="col">
				<div class="card-dev">
					<?php include 'svgs/hexagon.php'; ?>
				</div>
			</div>
			<form class="col align-self-center" id="frmContacto">
				<div class="form-group">
			    <label for="name">Nombre:</label>
			    <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre completo.">
			  </div>
			  <div class="form-group">
			    <label for="email">Correo electrónico:</label>
			    <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
			  </div>
			  <div class="form-group">
			    <label for="phone">Celular:</label>
			    <input type="password" class="form-control" id="phone" placeholder="Ingrese su número de celular">
			  </div>
			  <div class="form-group">
			    <label for="message">Mensaje:</label>
			    <textarea class="form-control" id="message" placeholder="Mensaje">
			    </textarea>
			  </div>
			  <div class="form-button text-center">
			  	<button type="button" id="sendForm" class="btn btn-primary">
			  		<span>Enviar</span>
			  		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
						  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
						</svg>
					</button>
			  </div>
			</form>
	</div>


	<style type="text/css">
		#demo {
		  max-height: 100%;
		  max-width: 100%;
		}
	</style>

</footer>