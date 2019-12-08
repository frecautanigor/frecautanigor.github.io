$( document ).ready(function() {


	// begin ck
	$(document).ready(function(){
		var allEditors = document.querySelectorAll('.editor');
		for (var i = 0; i < allEditors.length; ++i) {
		  ClassicEditor
		  .create(allEditors[i],
		  		{
			        heading: {
			            options: [
			                { model: 'paragraph', title: 'Paragraph', class: 'p' },
			                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'h1' },
			                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'h2' },
			                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'h3' }
			            ]
			        }
			    }
		  	);

		}


	});

	$(".grid").imagesLoaded(function() {
		$(".grid").masonry({
			itemSelector: ".grid-item",
			columnWidth: ".grid-item",
		});
	});

	// logout popup
	$(document).ready(function(){

		$('.logout').click(function(){
			$(".popup-body").toggleClass('is-active')
		});
		$('.close-popup').click(function(){
			$(".popup-body").toggleClass('is-active')
		});

	});

	// delete item
	$(document).ready(function(){

		$('.delete').click(function(){
			$(".modal-confirm").toggleClass('is-active')
		});
		$('.close-notify').click(function(){
			$(".modal-confirm").toggleClass('is-active')
		});

	});


	// begin hamburger
	$(document).ready(function(){
		$('.hamburger').click(function(){
			$(this).toggleClass('is-active');
			$(".adm_header-nav").toggleClass('is-active');
		});
	});

	// hamburger content nav

	$(document).ready(function(){
		$('.content__nav-toggler').click(function(){
			$(this).toggleClass('is-active');
			$(".content__nav").toggleClass('is-active');
		});
	});

	// begin nav
	var navOffset = jQuery(".nav-container").offset().top;

	jQuery(".nav-container").wrap('<div class="nav-placeholder"></div>');

	jQuery(".nav-placeholder").height(jQuery(".nav-container").outerHeight());

	jQuery(window).scroll(function(){
		
	var scrollPos = jQuery(window).scrollTop();

	if (scrollPos>=navOffset)
	{
		jQuery(".nav-container").addClass("nav-fixed");

	}else {
		jQuery(".nav-container").removeClass("nav-fixed");
	}
	});

	// sponsor-line
	$('.footer__sponsor').slick({
		// infinite: true,
		// slidesToScroll: 4,
		// variableWidth: true
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					}
			},

			{
				breakpoint: 600,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false
					}
			},

			{
				breakpoint: 480,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false
					}
			}
		]
      });

	// begin modl
	$('.tab-link').click(function()
	{
	  var tab_id = $(this).attr('data-tab');

	  $('.tab-link').removeClass('tab-active');
	  $('.tab-content').removeClass('tab-active');

	  $(this).addClass('tab-active');
	  $("#"+tab_id).addClass('tab-active');
	  $(".modl").addClass("visible");
	  $("body").addClass("fixed");
 
	});
	

	// close window if i click aroud window + remove class fixed for body
	$(document).click(function(event) {
	  //if you click on anything except the modl itself or the "open modl" link, close the modl
	  if (!$(event.target).closest(".modl-window,.tab-link").length) {
	    $("body").find(".modl").removeClass("visible");
	  	$("body").removeClass("fixed");
	  }
	});

	// btn close modal
	$('.modl-close').click(function(){
		$(".modl").removeClass('visible')
	  	$("body").removeClass("fixed");
	});


	// fancy box

	$('[data-fancybox="gallery"]').fancybox({
		thumbs: false
	});

	// validation
	$(function()
	  {
		$("#validate-proposal").validate({
			rules: {
			// no quoting necessary
				name: {
					required: true,
					minlength: 5
				},
				mail: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					digits: true,
					minlength: 9
				},
				message: {
					required: true,
					minlength: 20
				},
				captcha:{
					required: true
				}
			},
			messages: {
				name: {
					required:"Numele și Prenumle sunt Obligatorii !",
					minlength: "Minim 5 caractere !"
				},
				mail: {
					required: "E-mail-ul este obligatoriu !",
					email: "Vă rugăm introduceți un e-mail valid !",
				},
				phone: {
					required: "Este necesară introducerea telefonului !",
					digits: "Vă rugăm să introduceți un număr corect (fără spații)!",
					minlength: "Numărul trebuie să conțină minim 9 cifre !",
				},
				message: {
					required: "Vă rugăm să ne lăsați mesajul dorit !",
					minlength: "Minim 20 caractere !"
				},
				captcha:{
					required: "&nbsp;Confirmare necesară!"
				}                                              
			},
			errorPlacement: function(error, element) 
			{
			    if ( element.is(":checkbox") ) 
			    {
			        error.appendTo( element.parents('.captcha') );
			    }
			    else 
			    { // This is the default behavior 
			        error.insertAfter( element );
			    }
			 }

		});
	});

	$(function()
	  {
		$("#validate-question").validate({
			rules: {
			// no quoting necessary
				name: {
					required: true,
					minlength: 5
				},
				mail: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					digits: true,
					minlength: 9
				},
				message: {
					required: true,
					minlength: 20
				},
				captcha:{
					required: true
				}
			},
			messages: {
				name: {
					required:"Numele și Prenumle sunt Obligatorii !",
					minlength: "Minim 5 caractere !"
				},
				mail: {
					required: "E-mail-ul este obligatoriu !",
					email: "Vă rugăm introduceți un e-mail valid !",
				},
				phone: {
					required: "Este necesară introducerea telefonului !",
					digits: "Vă rugăm să introduceți un număr corect (fără spații)!",
					minlength: "Numărul trebuie să conțină minim 9 cifre !",
				},
				message: {
					required: "Vă rugăm să ne lăsați mesajul dorit !",
					minlength: "Minim 20 caractere !"
				},
				captcha:{
					required: "&nbsp;&nbsp;Confirmare necesară!"
				}                                               
			},
			errorPlacement: function(error, element) 
			{
			    if ( element.is(":checkbox") ) 
			    {
			        error.appendTo( element.parents('.captcha') );
			    }
			    else 
			    { // This is the default behavior 
			        error.insertAfter( element );
			    }
			 }

		});
	});

	$(function()
	  {
	    $('#validate-report').validate(
	      {
	        rules: {
	        // no quoting necessary
	        	name: {
	        		required: true,
	        		minlength: 5
	        	},
	        	mail: {
	        		required: true,
	        		email: true
	        	},
	        	phone: {
	        		required: true,
	        		digits: true,
	        		minlength: 9
	        	},
	        	message: {
	        		required: true,
	        		minlength: 20
	        	},
	        	captcha:{
	        		required: true
	        	},
	        	radio:{
	        		required: true
	        	}
	        },
	        messages: {
				name: {
					required:"Numele și Prenumle sunt Obligatorii !",
					minlength: "Minim 5 caractere !"
				},
				mail: {
					required: "E-mail-ul este obligatoriu !",
					email: "Vă rugăm introduceți un e-mail valid !",
				},
				phone: {
					required: "Este necesară introducerea telefonului !",
					digits: "Vă rugăm să introduceți un număr corect (fără spații)!",
					minlength: "Numărul trebuie să conțină minim 9 cifre !",
				},
				message: {
					required: "Vă rugăm să ne lăsați mesajul dorit !",
					minlength: "Minim 20 caractere !"
				},
				captcha:{
					required: "&nbsp;Confirmare necesară!"
				},
	        	radio:{
	        		required: "&nbsp;Alege problema"
	        	}                                             
			},
	        errorPlacement: function(error, element) 
	        {
	            if ( element.is(":radio") ) 
	            {
	                error.appendTo( element.parents('.problem-type') );
	            }
	            else 
	            { // This is the default behavior 
	                error.insertAfter( element );
	            }
	            if ( element.is(":checkbox") ) 
	            {
	                error.appendTo( element.parents('.captcha') );
	            }
	         }
	      });

	    
	  });

	// cookies
	$(function () {
	$('.cookie-popup').firstVisitPopup({
	  cookieName : 'homepage',
	  showAgainSelector: '#show-message'
	 });
	});

	// preloader
		$(window).on('load', function () {
	        var $preloader = $('#p_prldr'),
	            $svg_anm   = $preloader.find('.svg_anm');
	        $svg_anm.fadeOut();
	        $preloader.delay(2000).fadeOut('slow');
	    });
});