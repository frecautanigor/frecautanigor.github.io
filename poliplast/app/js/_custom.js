document.addEventListener("DOMContentLoaded", function () {
    // Styles for select TAG
    $('.select').niceSelect();

    // Link catalog
    $('.nav__item-catalog').click(function () {
        $('.humburger-catalog').toggleClass('open');
        $('.text').toggleClass('open');
	});

    // Link catalog
    $('.nav__item-menu').click(function () {
        $('.humburger-menu').toggleClass('open');
	});
	
	// Arcodion menu
    $("#catalog__menu").accordion();

	// Slider products
	$('.product__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: true,
		centerPadding: '0',
		autoplaySpeed: 5000,
		lazyLoad: 'ondemand',
		infinite: true,
		loop: true,
		nextArrow: '<div class="nav_slider right"></div>',
		prevArrow: '<div class="nav_slider left"></div>',

		responsive: [
			{
			  breakpoint: 1107,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]

	  });

	// Slider solution
	$('.solution__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: true,
		centerPadding: '0',
		autoplaySpeed: 5000,
		lazyLoad: 'ondemand',
		infinite: true,
		loop: true,
		nextArrow: '<div class="nav_slider right"></div>',
		prevArrow: '<div class="nav_slider left"></div>',

	  });

	// Header menu fixed
	var waypoint = new Waypoint({
		element: document.getElementsByClassName("nav"),

		handler: function (dir) {
			if (dir === "down") {
				$(".header__wrapper").addClass("fixed animated fadeInDown");
			} else 
				$(".header__wrapper").removeClass("fixed animated fadeInDown");
		},
		offset: '-50px'

	});

	// Tabs
	$("ul.tabs__caption").on("click", "li:not(.active)", function() {
		$(this)
		.addClass("active")
		.siblings()
		.removeClass("active")
		.closest("div.tabs")
		.find("div.tabs__content")
		.removeClass("active")
		.eq($(this).index())
		.addClass("active");
	});

	// Slider for view product
	$('.view__slider-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		lazyLoad: 'ondemand',
		swipe: false,
		asNavFor: '.view__slider-nav'
	  });
	  $('.view__slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.view__slider-img',
		focusOnSelect: true,
		arrows: false,
		loop: true

	  });

	// CALC 
	$('.minus-btn').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('div').find('input');
		var value = parseInt($input.val());
	 
		if (value && 1) {
			value = value - 1;
		} else {
			value = 0;
		}
	 
	  $input.val(value);
	 
	});
	 
	$('.plus-btn').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('div').find('input');
		var value = parseInt($input.val());
	 
		if (value && 100) {
			value = value + 1;
		} else {
			value =100;
		}
	 
		$input.val(value);
	});

	$('.slider').cardslider({

		// keyboard navigation
		// keys: {
		//   next: 38,
		//   prev: 40
		// },
	  
		// 'up', 'down', 'right', 'left'
		direction: 'up',
	  
		// shows navigation
		nav: true,
	  
		// allows swipe event on touch devices
		swipe: true,
	  
		// shows bottom pagination dots
		dots: true,
	  
		// infinite loop
		loop: true,
	  
		// callbacks
		// beforeCardChange: null,
		// afterCardChange: null
		
	  })

	
	// $('.slider').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: true,
    // dots: true,
    // centerMode: true,
    // variableWidth: true,
    // infinite: true,
    // focusOnSelect: true,
    // cssEase: 'linear',
    // touchMove: true,
});