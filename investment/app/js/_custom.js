function showImageNews(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("news__images--item");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("news__item");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  

document.addEventListener("DOMContentLoaded", function() {
	
	// Select form
	$(".select").dropkick({
		mobile: true
	});

	// Slider
	var swiper = new Swiper('.positions__slider--container', {
		slidesPerView: 4,
		spaceBetween: 25,
		loop: true,
		infinite: true,
    	lazy: true,
		navigation: {
			nextEl: '.positions__slider--next',
			prevEl: '.positions__slider--previous',
		},
		breakpoints: {
			// when window width is >= 0px
			0: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
			// when window width is >= 576px
			576: {
			  slidesPerView: 2,
			  spaceBetween: 40
			},
			// when window width is >= 640px
			768: {
			  slidesPerView: 2,
			  spaceBetween: 40
			},
			// when window width is >= 992px
			992: {
			  slidesPerView: 3,
			  spaceBetween: 20
			},
			// when window width is >= 1100px
			1100: {
			  slidesPerView: 4,
			  spaceBetween: 20
			}
		  }
	});

	// Search filter
   $(".checkbox-filter").on("click", function(){
		if(this.checked) {
			$(".header__filter").removeClass('disabled');
			$(".header__filter--item .dk-select").removeClass('dk-select-disabled');
			$(".header__filter--checkbox .checkbox").prop("disabled", false);
		} else {
			$(".header__filter").addClass('disabled');
			$(".header__filter--item .dk-select").addClass('dk-select-disabled');
			$(".header__filter--checkbox .checkbox").prop("disabled", true);
			$(".header__filter--item .select").prop("disabled", true);
		}
	});
   $(".mobile-additionally").on("click", function(){
		$(".header__filter").toggleClass('disabled');
		$(".header__filter--item .dk-select").toggleClass('dk-select-disabled');
		$(".header__buttons").toggleClass('hidden');
		$(".header__filter--checkbox .checkbox").prop("disabled", false);
	});


	var contentSections = $('.section');
	var navigationItems = $('.scrollmenu .scrollmenu__li');
	var contentSectionsActive = $('.section.active');
	var navigationLinks = $('.scrollmenu .scrollmenu__link');
	
	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationLinks.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('.scrollmenu__ul .scrollmenu__link[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/4 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/4 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('active');
				$this.addClass('active');
				navigationLinks.eq(activeSection).addClass('active');
			} else {
				navigationItems.eq(activeSection).removeClass('active');
				$this.removeClass('active');
			}
			if ( ( $this.offset().top - $(window).height()/4 > $(window).scrollTop() ) ) {
				$this.removeClass('active');
				navigationLinks.eq(activeSection).removeClass('active');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}


	function percent() {
		contentSections.each(function(){
			var contentSectionsActive = $('.section.active');
			var height = contentSectionsActive.height();
			var offset = 0;
			var scroll = $(window).scrollTop();
			if ($('.section.active').length != 0) {
				offset = contentSectionsActive.offset().top;

				var per =  (scroll - offset) / height * 100;
				per += per;
				if (per < 45) {
					document.querySelectorAll('.scrollmenu .scrollmenu__li.active')[0].style.setProperty("--height", per+"%");
				} else {
					document.querySelectorAll('.scrollmenu .scrollmenu__li.active')[0].style.setProperty("--height", "100%");
				}

				if (per < -0) {
					document.querySelectorAll('.scrollmenu .scrollmenu__li.active')[0].style.setProperty("--height", "0%");
				}
			}

		});
	}

	percent();
	$(window).on('scroll', function(){
		percent();
	});

	$(window).scroll(function () {
		$(".wrapper").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
	});

	$('.nav__footer--contact .open-message').click(function() {
		$('.nav__footer--contact .button').toggleClass('active');
	});

	$('.nav__footer--contact .close-submenu').click(function() {
		$('.nav__footer--contact .button').removeClass('active');
	});
	
	// Submenu mobile
	$('.navigation .navigation__item .submenu').parent().addClass('navigation__item--arrow');

	$('.navigation__item--arrow').click(function() {
		$(this).toggleClass('active');
	});

	$('.mobile-menu .humburger').click(function() {
		$('.mobile-menu__content').toggleClass('active');
		$(this).toggleClass('open');
	});

	$('.open-message-block').click(function() {
		$('.messages-mobile').css('display', 'block');
	});

	$('.close-mobile-message').click(function() {
		$('.messages-mobile').css('display', 'none');
	});


});
