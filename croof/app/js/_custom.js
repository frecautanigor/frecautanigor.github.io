document.addEventListener("DOMContentLoaded", function() {

	$(".slider_content").slick({
		dots: true,
		prevArrow: false,
    	nextArrow: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true
	});

	// Menu hamburger
	var menu = document.querySelector( "#hamburger" )
	menu.addEventListener( "click", function(){
		this.classList.toggle( "active" );
		$(".header_menu").toggleClass( "block animated fadeInDown" );
	});

	// Fixed menu
	var waypoint = new Waypoint({
		element: document.getElementsByClassName("header_menu"),
		handler: function(dir) {
		  if (dir === "down") {
			$(".header_menu").addClass("fixed animated fadeInDown");
		  } else
		  $(".header_menu").removeClass("fixed animated fadeInDown");
		}
	  });

	// Fixed button call
	var waypoint = new Waypoint({
		element: document.getElementsByClassName("section wwa"),
		handler: function(dir) {
		  if (dir === "down") {
			$(".button-call").addClass("fixed animated infinite heartBeat slower");
		  } else
		  $(".button-call").removeClass("fixed animated infinite heartBeat slower");
		}
	  });

});
