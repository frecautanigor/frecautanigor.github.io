document.addEventListener("DOMContentLoaded", function() {

	$('.sliderr').slick({
		dots: true,
		prevArrow: false,
    	nextArrow: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});

});
