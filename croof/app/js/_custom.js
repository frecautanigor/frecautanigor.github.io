document.addEventListener("DOMContentLoaded", function() {

	$(window).on('load', function() {
		$('.loading__circle').delay(500).fadeOut('slow');
		$('.loading').delay(1000).fadeOut('slow');
	})

	$(".slider__content").slick({
		dots: true,
		prevArrow: false,
    	nextArrow: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true
	});

	if (window.matchMedia("(max-width: 576px)").matches) {
		/* the viewport is less than 576px pixels wide */
		$(".materials__slider").slick({
			dots: false,
			prevArrow: false,
			nextArrow: false,
			infinite: true,
			speed: 200,
			slidesToShow: 2,
			adaptiveHeight: true,
			autoplay: true
		});
	  } 

	// Menu hamburger
	var menu = document.querySelector( "#hamburger" );
	menu.addEventListener( "click", function(){
		this.classList.toggle( "active" );
		$(".header__menu").toggleClass( "block animated fadeInDown" );
	});

	// Fixed menu
	var waypoint = new Waypoint({
		element: document.getElementsByClassName("header__menu"),
		handler: function(dir) {
		  if (dir === "down") {
			$(".header__menu").addClass("fixed animated fadeInDown");
		  } else
		  $(".header__menu").removeClass("fixed animated fadeInDown");
		}
	  });

	// Fixed button call
	var waypoint = new Waypoint({
		element: document.getElementsByClassName("section"),
		handler: function(dir) {
		  if (dir === "down") {
			$(".button-call").addClass("fixed animated infinite heartBeat slower");
		  } else
		  $(".button-call").removeClass("fixed animated infinite heartBeat slower");
		}
	  });  

	//   COOKIE Block
	$(function() {
		// Проверяем запись в куках о посещении
		// Если запись есть - ничего не происходит
		if (!$.cookie('cookie__info')) {
			// если cookie не установлено появится окно
			// с задержкой 5 секунд
			var delay__popup = 1000;
			setTimeout("document.querySelector('.cookie__block').style.display='inline-block'", delay__popup);
		}

	});
	   
	// Закрытие полосы cookie

	$('.cookie__block-ok').click(function(){
		$('.cookie__block').fadeOut();
		$.cookie('cookie__info', true, {
			// Время хранения cookie в днях
			expires: 30,
			path: '/'
		});
	});

});
