document.addEventListener("DOMContentLoaded", function() {

	$('.slider_content').slick({
		dots: true,
		prevArrow: false,
    	nextArrow: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true
	});

	// Fixed menu
	var waypoint = new Waypoint({
		element: document.getElementsByClassName('header_menu'),
		handler: function(dir) {
		  if (dir === 'down') {
			$('.header_menu').addClass('fixed animated fadeInDown');
		  } else
		  $('.header_menu').removeClass('fixed animated fadeInDown');
		}
	  });

});
