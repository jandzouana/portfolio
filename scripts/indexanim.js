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
			//alert("last-child");
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

		//alert( "Index: " + $(this).index() );

		var index = $(this).index();
		index = index + 1;
		//var index = $dot.index(this);
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
		//alert("Index: " + index);

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

				setTimeout( function() { $(element).css( { transition: "none" } ) }, 500 );
			}
			else{
				$('.sub-arrow').css({ transition: "transform 0.2s", transform:  "rotate(" + 0 + "deg)"});
				setTimeout( function() { $(element).css( { transition: "none" } ) }, 500 );
				rotated = false;
			}
	});
	var menuDown = false;
	/*Mobile navigation icon animation activation*/
	$("#menuButton").click(function(){
			$(this).toggleClass('is-active');
			//$('.text').toggleClass("small");

			if (menuDown == false){
				$('.menu').fadeIn("fast");
				$('.bot-nav-ul').css("width", "30vw");
				$('.bot-nav-ul li').css("display", "block");
				$("main land").css("width", "auto");
				//text sizes about me


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
