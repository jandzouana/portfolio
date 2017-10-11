/*Adds n number of dots underslideshow*/
function add(n){
	var $active_dot = $("<li class='single-dot active-dot'> </li>");
	$(".dots ul").append($active_dot);
	for(var i = 0; i < n-1; i++){
		var $dot = $("<li class='single-dot'> </li>");
		$(".dots ul").append($dot);
	}
}
$(document).ready(function(){
	/*Make logo and portfolio button appear*/
	$("#home-mobile-logo").css("display", "none");
	$("#home-mobile-logo").delay(500).fadeIn(1000);
 //portfolio-button-mobile
  $("#portfolio-button-mobile").css("display", "none");
  $("#portfolio-button-mobile").delay(1500).fadeIn(1000);


	/*Clicking on social media button on home page*/
	var socClicked = false;
	$(".home-soc-button").click(function(){
		if(!socClicked){
			$(".home-mobile-iconcon").fadeIn(600);
			$(".home-mobile-iconcon").css("display", "flex");
			$(".home-soc-button").addClass("soc-button-clicked");
			$(".home-soc-button").removeClass("home-soc-hover");

			$(".long-line").removeClass("line-hover");
			$(".long-line").addClass("soc-line-clicked");
			$(".short-line").addClass("soc-line-clicked");
			socClicked = true;

		}
		else{
			$(".home-mobile-iconcon").fadeOut(600);
			$(".home-soc-button").removeClass("soc-button-clicked");
			$(".home-soc-button").addClass("home-soc-hover");

			$(".long-line").addClass("line-hover");
			$(".long-line").removeClass("soc-line-clicked");
			$(".short-line").removeClass("soc-line-clicked");
			socClicked = false;
		}
	});
	/*Showing contact info*/
	$("#contact-button").click(function(){
		$(".box1").hide();
		$(".link-box").hide();
		$("#main-about").css("justify-content", "center");
		$(".contact").fadeIn(600);
	});

	/*Changing color of little arrow*/
	$(".cont-subs").hover(
  function() {
    $(".sub-arrow" ).addClass("arrow-color");
		$(".sub-arrow").removeClass("arrow-color-orig");
  }, function() {
		$(".sub-arrow" ).removeClass("arrow-color");
    $(".sub-arrow").addClass("arrow-color-orig");
  }
);
	/*Dot addition n is number of images*/
	var n = $(".slideshow div").length;
	add(n);

	/*Slideshow operator*/
	var firstSlide = $(".slideshow :first-child");
	var lastSlide = $(".slideshow :last-child");

	var firstDot = $(".dots ul :first-child");
	var lastDot = $(".dots ul :last-child");

	$("#right_arrow").click(function(){
		var currentSlide = $(".active");
		var nextSlide = currentSlide.next();
		var currentDot = $(".active-dot");
		var nextDot = currentDot.next();

		if(currentSlide.is(":last-child")){
			nextSlide = firstSlide;
			nextDot = firstDot;
		}
		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
		nextSlide.fadeIn(600).addClass("active");
		currentDot.removeClass("active-dot");
		nextDot.addClass("active-dot");

	});
	$("#left_arrow").click(function(){
		var currentSlide = $(".active");
		var previousSlide = currentSlide.prev();

		var currentDot = $(".active-dot");
		var previousDot = currentDot.prev();

		if(currentSlide.is(":first-child")){
			previousSlide = lastSlide;
			previousDot = lastDot;
		}

		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
		previousSlide.fadeIn(600).addClass("active");
		currentDot.removeClass("active-dot");
		previousDot.addClass("active-dot");
	});

	/*Adds dot interactivity*/
	var $dot = $(".dots ul").find("li");
	$dot.click(function(){
		var currentSlide = $(".active");
		var nextSlide;
		var currentDot = $(".active-dot");
		$(this).addClass("active-dot");
		$(currentDot).removeClass("active-dot");

		var index = $(this).index();
		index = index + 1;
		currentSlide.removeClass("active");
		currentSlide.css("display", "none");
	  nextSlide = $(".slideshow :nth-child(" + index + ")");
		nextSlide.fadeIn(600).addClass("active");

	});

	var rotated = false;
	var down = false;

	/*Video Gallery functions*/
	var $vidtitle = $(".vid-list").find("li");
	$vidtitle.click(function(){
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		var currentVid = $(".active-vid");
		var currentLi = $(".active-li");
		var nextVid;
		$(this).addClass("active-li");
		$(currentLi).removeClass("active-li");

		var index = $(this).index();
		index = index +1;
		currentVid.removeClass("active-vid");
		currentVid.css("display", "none");
		nextVid = $(".videos :nth-child(" + index + ")");
		nextVid.fadeIn(600).addClass("active-vid");
	});


	/*Function that shows sub menus*/
	$('.cont-subs').click(function(){
		if(down == false){
			$(this).next('ul').slideDown("fast");
			$('.main-nav-ul ul').css("display", "flex");
			down = true;
		}
		else{
			$(this).next('ul').slideUp("fast");
			down = false;
		}
			if(rotated == false){
	      $('.sub-arrow').css({ transition: "transform 0.2s", transform:  "rotate(" + -86 + "deg) translate(0px,-3px)"});
				rotated = true;

				setTimeout( function() { $('.sub-arrow').css( { transition: "none" } ) }, 500 );
			}
			else{
				$('.sub-arrow').css({ transition: "transform 0.2s", transform:  "rotate(" + 0 + "deg)"});
				setTimeout( function() { $('.sub-arrow').css( { transition: "none" } ) }, 500 );
				rotated = false;
			}
	});
	var menuDown = false;
	/*Mobile navigation icon animation activation*/
	$("#menuButton").click(function(){
			$(this).toggleClass('is-active');
			if (menuDown == false){
				$('.menu').fadeIn("fast");
				$('.bot-nav-ul').css("width", "30vw");
				$('.bot-nav-ul li').css("display", "block");
				$('.contact').css("padding", "0px 10px 0px 10px");

				menuDown = true;
			}
			else{
				$('.menu').fadeOut("fast");
				$('.bot-nav-ul').css("width", "0vw");
				$('.bot-nav-ul li').css("display", "none");
				$("main land").css("width", "100vw!important");
				menuDown = false;
			}
	});
	/*Hiding submit button*/
	$("#submit").click(function(){
		$('#submit').css("display", "none");
	});
});

/*
.text2, .text{
	border: 1px solid blue;
	height: auto;
	h2{
		font-size: 10vh;
	}
	h3{
		font-size: 5.5vh;
	}

}
*/
