Dropzone.autoDiscover = false;
$(document).ready(function() {
	
	// NAV
	$('.header__hamburger').click(function () {
		$('.nav').fadeToggle();
		$('.page').addClass('nav-block');
	});

	$('.nav-close').click(function () {
		$('.nav').fadeToggle();
		$('.page').removeClass('nav-block');
	});

	// NOTIFICATIONS
	$('.header__notifications-button').click(function () {
		$(this).toggleClass('header__notifications-button_active');
		$('.header__notifications-list').fadeToggle();
	});
	$('.header__notifications-top-close').click(function () {
		$('.header__notifications-button').toggleClass('header__notifications-button_active');
		$('.header__notifications-list').fadeToggle();
	});

	$('.header__notifications-delete').click(function () {
		$(this).parent().fadeOut(500, function(){ 
			$(this).remove();
		});
	});

	// SEARCH
	$('.search__input-reset').click(function () {
		$('.search__input').val(null);
	});

	// SELECT
	$(".select").dropkick();

	$('.catalog-tabs-select').selectator({
		useSearch: false
	});
	
	// FILTER CATALOG
	$('#table-catalog').mixItUp({
		load: {
			sort: 'order:asc'
		},
		  
		selectors: {
		  target: '.table-list__item',
		  filter: '.catalog-tabs__item'
		},

		animation: {
			duration: 500,
			nudge: false,
			reverseOut: false,
			effects: "fade translateY(100%)"
		}
	  });

	  $(function(){
		var $filterSelect = $('.catalog-tabs-select'),
			$container = $('#table-catalog');
		
		$container.mixItUp();
		
		$filterSelect.on('change', function(){
		  $container.mixItUp('filter', this.value);
		});
	  });

	  // CALC
	$(function () {
		$(".product__counter-plus").click(function () {
			var inpt = $(this)
				.closest(".product__counter")
				.find(".product__counter-input");
			var val = parseInt(inpt.val());
			if (val < 0) 
				inpt.val(val = 0);
			inpt.val(val + 1);
		});

		$(".product__counter-minus").click(function () {
			var inpt = $(this)
				.closest(".product__counter")
				.find(".product__counter-input");
			var val = parseInt(inpt.val());
			if (val < 1) 
				inpt.val(val = 1);
			if (val == 1) 
				return;
			inpt.val(val - 1);
		});
	});

	$(function () {
		$(".table-list__counter-plus").click(function () {
			var inpt = $(this)
				.closest(".table-list__counter")
				.find(".table-list__counter-input");
			var val = parseInt(inpt.val());
			if (val < 0) 
				inpt.val(val = 0);
			inpt.val(val + 1);
		});

		$(".table-list__counter-minus").click(function () {
			var inpt = $(this)
				.closest(".table-list__counter")
				.find(".table-list__counter-input");
			var val = parseInt(inpt.val());
			if (val < 1) 
				inpt.val(val = 1);
			if (val == 1) 
				return;
			inpt.val(val - 1);
		});
	});

	// LINK NOTIFICATION NOT-AVAILABLE
	$('.not-available__notification').click(function() {
		$(this).addClass('not-available__notification_check');
	});

	

// 	var mh = 0;
//    $(".table-list__title").each(function () {
//        var h_block = $(this).offset().left;
//        if(h_block > mh) {
//           mh = h_block;
// 	   };
// 	   console.log( $( this ).text() + " - height = " + mh);
	   

//    });
//    $(".table-list__title").height(mh);

	$(function() {
	var mh = 0;

		$( ".table-list__title" ).each(function( index ) {
			console.log( index + ": " + $( this ).text() );
			console.log( $(this).offset().left );
			
			var h_block = $(this).offset().left;
			if(h_block > mh) {
				mh = h_block;
			}
	
		  });
	});

	// TABS-TITLE
	function tabsTitle() {
		$(function() {
			if ($('.table-list').length != 0 || $('.table-headings').length != 0) {
				var offsetPhoto = $('.table-list__image').offset();
				var offsetTitle = $('.table-list__title').offset();
				var offsetCounter = $('.table-list__counter').offset();
				var offsetTotal = $('.table-list__total').offset();
				var offsetCode = $('.table-list__info-code').offset();
				var offsetAvailability = $('.table-list__info-availability').offset();
				var offsetPrice = $('.table-list__info-price').offset();
		
				var offsetBasket = $('.table-list__item-block .btn-small');
				var right = ($(window).width() - (offsetBasket.offset().left + offsetBasket.outerWidth()));
		
				$('.table-headings__item-photo').css('left', offsetPhoto.left);
				$('.table-headings__item-title').css('left', offsetTitle.left);
				$('.table-headings__item-counter').css('left', offsetCounter.left);
				$('.table-headings__item-total').css('left', offsetTotal.left);
				$('.table-headings__item-code').css('left', offsetCode.left);
				$('.table-headings__item-availability').css('left', offsetAvailability.left);
				$('.table-headings__item-price').css('left', offsetPrice.left);
		
				$('.table-headings__item-basket').css('right', right);
			}
		});
	
	}
	tabsTitle();
	$(window).on('resize', tabsTitle);	
	
	
	// MODAL & SWIPER for PRODUCTS
	var galleryThumbs = new Swiper('.product__slider-thumbs', {
		spaceBetween: 20,
		slidesPerView: 4,
		watchSlidesVisibility: true,
		watchSlidesProgress: true
	});
	var galleryTop = new Swiper('.product__slider-top', {
		loop: true,
		thumbs: {
			swiper: galleryThumbs
		}
	});

	
	$('a[data-modal]').click(function(event) {
		$(this).modal();
		if (this) {
			galleryThumbs.update();
		galleryTop.update();
		}
		return false;
	  });


	// TABS PRODUCT INFO
	(function($) {
		$(function() {
		 
		  $('.tabs-caption').on('click', '.tabs-caption__item:not(.tabs-caption__item_active)', function() {
			$(this)
			  .addClass('tabs-caption__item_active').siblings().removeClass('tabs-caption__item_active')
			  .closest('.tabs').find('div.tabs-content').removeClass('tabs-content_active').eq($(this).index()).addClass('tabs-content_active');
		  });
		 
		});
		})(jQuery);
		
	(function($) {
		$(function() {
		 
		  $('.tabs-caption').on('click', '.tabs-caption__item:not(.tabs-caption__item_active)', function() {
			$(this)
			  .addClass('tabs-caption__item_active').siblings().removeClass('tabs-caption__item_active')
			  .closest('.tabs').find('div.tabs-content').removeClass('tabs-content_active').eq($(this).index()).addClass('tabs-content_active');
		  });
		 
		});
		})(jQuery);

	
	$('.date__input').datepick({
		dateFormat: 'dd/mm/yy',
		showOptions: 'blind'
	});


	$('.datepick').on("DOMNodeInserted", function (event) { 
		$('.date__button').appendTo('.datepick');
	 });

	 if ($('#dropzone').length) {
		 var dropzone = new Dropzone("#dropzone", {
        addRemoveLinks: true,
        dictRemoveFile: "",
		url: "/download",
		dictDefaultMessage: 'Перенесите файл в эту область, или <b style="color: #3BC6E4; font-weight: 600;">выберите вручную</b>',
		dictCancelUploadConfirmation: 'Вы уверены что хотите отменить загрузку?'
      });
	 }

	 


	

});
