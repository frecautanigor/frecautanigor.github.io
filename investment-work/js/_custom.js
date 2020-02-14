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


	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}

});
