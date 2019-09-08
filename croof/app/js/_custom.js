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
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true
	});

	$(".testimonials__content").slick({
		dots: true,
		prevArrow: false,
    	nextArrow: false,
		infinite: true,
		speed: 300,
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
			speed: 100,
			slidesToShow: 2,
			adaptiveHeight: true,
			autoplay: true
		});

		$(".partners__slider").slick({
			dots: false,
			prevArrow: false,
			nextArrow: false,
			infinite: true,
			speed: 100,
			slidesToShow: 2,
			adaptiveHeight: true,
			autoplay: true
		});
	  }

	if (window.matchMedia("(max-width: 768px)").matches) {
		/* the viewport is less than 768px pixels wide */
		$("#menu").metisMenu();

		var waypoint = new Waypoint({
			element: document.getElementsByClassName("section"),
			handler: function(dir) {
			  if (dir === "down") {
				$(".albums__button").addClass("fixed sm animated bounceInLeft");
			  } else
			  $(".albums__button").removeClass("fixed sm animated bounceInLeft");
			}
		  });

		  var waypoint = new Waypoint({
			element: document.getElementsByClassName("callback"),
			handler: function(dir) {
			  if (dir === "down") {
				$(".albums__button").removeClass("fixed sm animated bounceInLeft");
			  } else
			  $(".albums__button").addClass("fixed sm animated bounceInLeft");
			},
			offset: '80%'
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

	var waypoint = new Waypoint({
		element: document.getElementsByClassName("section"),
		handler: function(dir) {
		  if (dir === "down") {
			$(".albums__button").addClass("fixed");
		  } else
		  $(".albums__button").removeClass("fixed");
		},
		offset: '140px'
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

	var waypoint = new Waypoint({
		element: document.getElementsByClassName("callback"),
		handler: function(dir) {
		  if (dir === "down") {
			$(".button-call").removeClass("fixed animated infinite heartBeat slower");
		  } else
		  $(".button-call").addClass("fixed animated infinite heartBeat slower");
		},
		offset: '80%'
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

	// GALLERY START
	var lightbox = $('.gallery__item').simpleLightbox();
	// GALLERY END
	  
});
