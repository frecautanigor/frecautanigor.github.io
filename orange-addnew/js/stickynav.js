jQuery(document).ready(function()
{
var navOffset = jQuery("nav").offset().top;

jQuery("nav").wrap('<div class="nav-placeholder"></div>');

jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

jQuery(window).scroll(function()
{
var scrollPos = jQuery(window).scrollTop();

if (scrollPos>=navOffset)
{
	jQuery("nav").addClass("navbar-fixed-top");

}else {
	jQuery("nav").removeClass("navbar-fixed-top");
}
});
});