<!DOCTYPE html>
<?php
session_start();
?>
<html>
  <head>
    <title>About me </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="stylesheets/main.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="scripts/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="scripts/indexanim.js"></script>
		<link rel="icon" href="pictures/brand/logovec4.png">

    <!--[if IE]>
        <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <![endif]-->

  </head>
  <body>
		<div class="container" id="container-a">
			<nav class="mob-nav-bar">
				<img class = "nav-logo" src="pictures/brand/logovec4.png" alt="logo">
				<a href="#" class="menu-button" id="menuButton">
    			<span class="burger-icon"></span>
				</a>
			</nav>
			<div class = "menu">
				<div id="brand">
						<a href="index.html" id = "logo">
							<img src="pictures/brand/logovec4.png" alt="logo">
						</a>

					<div id="logo-text">
						<h2>Jessica Andzouana</h2>
						<h3>Animator &#8226 Designer &#8226 Developer</h3>
					</div>
				</div>
				<nav class="main-nav">
					<ul class="main-nav-ul">
						<li><a href="index.html">Home</a></li>
						<li><a href="about.php">About me</a></li>
						<li class="cont-subs"><a href="#">Art<span class="sub-arrow"></span></a></li>
						<ul>
							<li><a href="art/characters.html">Character Designs</a></li>
							<li><a href="art/digital.html">Digital Art</a></li>
							<li><a href="art/traditional.html">Traditional Art</a></li>
						</ul>
						<li><a href="animation.html">Animation</a></li>
						<li><a href="https://vimeo.com/123391160">Animation Reel</a></li>
					</ul>
				</nav>
				<div class = "footer">
					<div id= "soc2" class="social-media">
						<a class="iconcon" href="http://youtube.com/jessicaworks951" target="_blank">
	            <img class="icon" id="youtube" src="icons/ytw.svg" alt="youtube">
	          </a>
						<a class="iconcon" id = "link" href="http://instagram.com/jebranart" target="_blank">
							<img class="icon" src="icons/igw.svg" alt="instagram">
						</a>
						<a class="iconcon" href="http://twitter.com/jebranart" target="_blank">
							<img class="icon" src="icons/twitterw.svg" alt="twitter">
						</a>
						<a class="iconcon" href="http://thejandz.wordpress.com" target="_blank">
							<img class="icon" src="icons/wpw.svg" alt="wordpress">
						</a>
					</div>
					<div id="copy"><h3>Copyright © 2016 Jessica Andzouana</h3></div>
				</div>
			</div>
			<nav class="bot-nav">
				<ul class="bot-nav-ul">
					<li><a href="index.html">Home</a></li>
					<li><a href="about.php">About me</a></li>
					<li><a href="art/characters.html">Character Designs</a></li>
					<li><a href="art/digital.html">Digital Art</a></li>
					<li><a href="art/traditional.html">Traditional Art</a></li>
					<li><a href="animation.html">Animation</a></li>
					<li><a href="https://vimeo.com/123391160">Animation Reel</a></li>
					<li>
						<div id= "soc3" class="social-media">
							<a class="iconcon" href="http://youtube.com/jessicaworks951" target="_blank">
		            <img class="icon" id="youtube" src="../icons/ytw.svg" alt="youtube">
		          </a>
							<a class="iconcon" id = "link" href="http://instagram.com/jebranart" target="_blank">
								<img class="icon" src="../icons/igw.svg" alt="instagram">
							</a>
							<a class="iconcon" href="http://twitter.com/jebranart" target="_blank">
								<img class="icon" src="../icons/twitterw.svg" alt="twitter">
							</a>
							<a class="iconcon" href="http://thejandz.wordpress.com" target="_blank">
								<img class="icon" src="../icons/wpw.svg" alt="wordpress">
							</a>
						</div>
						<div id="copy"><h3>Copyright © 2016 Jessica Andzouana</h3></div>
					</li>
				</ul>
			</nav>
			<main id = "main-about">
				<div class="about-container">
					<div class="box1">
						<div class="prof"> </div>
						<div class="text">
							<h2>About me</h2>
							<h3>My name is Jessica Andzouana and I am a visual artist and programmer. I am currently a senior studying Computer Science and Studio Art at Santa Clara University. Artistically I have experience with various digital and traditional mediums, but I am primarily interested in animation and illustration. I love designing characters and no matter which medium I choose, characters become central to my art. Animation is especially appealing to me because it allows me bring characters to life by giving them personality, emotion, and thoughts by placing them in a visual narrative. <br> <br>
When I started attending university, I wanted to extend my knowledge beyond the arts and I was particularly drawn to computer science. As far as programming, my interests include front-end web development, software development and UI/UX design. I really enjoy thinking analytically to solve simple and complex problems with programming. Lately my major inclination has been towards Virtual Reality and Augmented Reality. I am currently creating various interactive experiences using Unity to learn how to design immersive, user-friendly interfaces. These projects allow me to use my programming background to fulfill my creative vision while exploring these emerging media.
							</h3>
						</div>
					</div>
					<div class="link-box">
						<a href="docs/artist.pdf" target="_blank"> Artist Statement</a>
						<a href="docs/resume.pdf" target="_blank"> Resume </a>
					</div>

					<section class="contact">
						<h2> Contact me </h2>
						<form method="post" action="">
							<div class="top">
						    <div class="left">
									<label>Name</label>
							    <input name="name" >
							    <label>Email</label>
							    <input name="email" type="email">
									<label>Enter Image Text</label>
									<img src="captcha.php" class="captcha"/><br>
									<input name="captcha" type="text">
								</div>
								<div class="right">
						    	<label>Message</label>
						    	<textarea name="message"></textarea>
								</div>
							</div>
					    <input id="submit" class="btn btn--full" name="submit" type="submit" value="Submit">
						</form>
						<?php
						if (isset($_POST["submit"])){
							if (isset($_POST["captcha"])&&$_POST["captcha"]!=""&&$_SESSION["code"]==$_POST["captcha"]){
									$name = $_POST['name'];
									$email = $_POST['email'];
									$message = $_POST['message'];
									$from = 'From: TangledDemo';
									$to = 'jebranart@gmail.com';
									$subject = 'Message from portfolio';

									$body = "From: $name\n"."E-mail: $email\n"."Message:\n"."$message";

									if (mail ($to, $subject, $body, $from)) {
											echo '<h3 class="submitmsg">Your message has been sent!</h3>';
											echo "<script>
													$('#submit').css('display', 'none');
											</script>";
									} else {
											echo '<h3 class="submitmsg">Something went wrong, go back and try again!</h3>';
									}
								}
							else {
								echo '<h3 class="submitmsg">Wrong code entered</h3>';
							}
						}
						?>
					</section>

				</div>

			</main>
		</div>
	</body>
</html>
