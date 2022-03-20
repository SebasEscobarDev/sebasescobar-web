<section id="section-skills">
	<div class="container">
		<div class="row" data-aos="fade-up">
			<div class="col-md-12 text-center title-first" data-depth="0.4">
				<h1 class="title-general" id="tt-skills">SET DE HABILIDADES</h1>
				<h1 class="title-copy" id="title-left-skills">SET DE HABILIDADES</h1>
				<h1 class="title-copy" id="title-right-skills">SET DE HABILIDADES</h1>
			</div>
			<?php
			$skills = [
				['name' => 'wordpress', 'display_name' => 'Wordpress'],
				['name' => 'html5', 'display_name' => 'HTML5'],
				['name' => 'css3', 'display_name' => 'CSS3'],
				['name' => 'js', 'display_name' => 'JavaScript'],
				//['name' => 'jquery', 'display_name' => 'jQuery'],
				['name' => 'pwa', 'display_name' => 'PWA Apps'],
				['name' => 'php', 'display_name' => 'PHP'],
				['name' => 'laravel', 'display_name' => 'Laravel'],
				//['name' => 'joomla', 'display_name' => 'Joomla'],
				//['name' => 'git', 'display_name' => 'Git'],
				//['name' => 'gitlab', 'display_name' => 'GitLab'],
				//['name' => 'ubuntu', 'display_name' => 'Deploy Server'],
				//['name' => 'bootstrap', 'display_name' => 'Bootstrap'],
				['name' => 'node', 'display_name' => 'Node JS'],
				//['name' => 'npm', 'display_name' => 'npm'],
				//['name' => 'bash', 'display_name' => 'Command'],
				//['name' => 'gsap', 'display_name' => 'gsap'],
				//['name' => 'sublime', 'display_name' => 'Sublime Text 3'],
				//['name' => 'photoshop', 'display_name' => 'Photoshop'],
			];
			for ($i=0; $i < count($skills) ; $i++) {  ?>
				<div class="col-md-2 col-sm-3 col-4 skillset <?php echo $skills[$i]['name']; ?>" data-aos="fade-up">
					<span class="skill-display"><?php echo $skills[$i]['display_name'];?></span>
					<?php include 'svgs/'.$skills[$i]['name'].'.php'; ?>
				</div>
			<?php }	?>
		</div>
	</div>
</section>