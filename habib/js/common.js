$(document).ready(function(){

	$(window).on('load', function() {
		$('#load').delay(500).fadeOut('slow');
	})

	// Button Hamburger

	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.header__nav-link').toggleClass('open');
		$('.main').toggleClass('fixed');
	});

	$('.header__nav-link a').click(function(){
		$('.hamburger').removeClass('open');
		$('.header__nav-link').removeClass('open');
		$('.main').removeClass('fixed');
	});

	// Read more (block + button)

	$('.taste__more-button').click(function() {
		$(this).prev()[$(this).prev().is(':hidden') ? "slideDown" : "slideUp"](500);

		$(this).text(function(i, v){
			return v === 'Другие Вкусы' ? 'Скыть' : 'Другие Вкусы';
		});
	});

	$(window).on('load resize', function(){
		if ($(window).width() <= 980) {
			$('.taste__row-1').insertAfter('.taste__row-2');
		}
	});

	// Testimonials slider
	$(".testimonials__slider").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true
	});

	// Gallery slider
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		slidesPerColumn: 2,
		breakpoints: {
			992: {
				slidesPerView: 3,
				slidesPerColumn: 2,
			},
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,

			},
			576: {
				slidesPerView: 2,
				slidesPerColumn: 1,
			},
			320: {
				slidesPerView: 1,
				slidesPerColumn: 2,

			}
		}
	});

	$('.open-popup-link').magnificPopup({
		type: 'inline',
		 removalDelay: 1000,
	});

	// Anchor link
	$(".header__nav-link").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 2000);
	});

});
