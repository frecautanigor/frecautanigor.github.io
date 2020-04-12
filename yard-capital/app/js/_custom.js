document.addEventListener("DOMContentLoaded", function() {

	$('.categories__item').each(function() {
		$(this).textfill({
			maxFontPixels: 16,
			minFontPixels: 3,
			innerTag: 'a',
		});
	});

	var mySwiper = new Swiper ('.card__image-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
	})

});
