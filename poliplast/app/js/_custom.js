document.addEventListener("DOMContentLoaded", function () {
	
	$(window).on('load', function () {
		var preloader = $('.loader');
		var preloaderFigure = preloader.find('.loader__figure');

		preloaderFigure.delay(900).fadeOut();
		preloader.delay(1000).fadeOut('slow');
	});

    // Styles for select TAG
    $('.select').niceSelect();

    // Link catalog
    $('.nav__item-catalog .humburger-catalog').click(function () {
        $('.humburger-catalog').toggleClass('open');
        $('.text').toggleClass('open');
	});

    $('.nav__item-catalog .text').click(function () {
        $('.humburger-catalog').toggleClass('open');
        $('.text').toggleClass('open');
	});

    $('.nav .search').click(function () {
        $(this).toggleClass('active');
        $('.header__search').toggleClass('show');
	});

    // Link catalog
    $('.nav__item-menu').click(function () {
        $('.humburger-menu').toggleClass('open');
        $('#catalog__menu-responsive').toggleClass('show');
	});
	
	// Arcodion menu
	$("#catalog__menu").accordion();
	$("#catalog__menu-responsive").accordion();

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
			  breakpoint: 700,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 500,
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

	// Main home slider
	var cardslider = $('.slider').cardslider({
		direction: 'up',
		nav: true,
		swipe: true,
		dots: true,
		loop: true,
	}).data('cardslider');

	if(typeof(cardslider) != "undefined" && cardslider !== null) {
		setInterval(function () {
			cardslider.nextCard();
		}, 10000);
	}

	// Modal
	var modal = new tingle.modal({
		closeMethods: ['btn-close'],
        // footer: true,
        // stickyFooter: true
	});

	modal.setContent(document.querySelector('.modal').innerHTML);
	
	var btn = document.querySelector('.callback');
    btn.addEventListener('click', function(){
        modal.open();
	});

	var btnClose = document.querySelector('.btn-close');
    btnClose.addEventListener('click', function(){
        modal.close();
	});

});