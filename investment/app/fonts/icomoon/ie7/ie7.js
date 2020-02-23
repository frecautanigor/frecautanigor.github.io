/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-top': '&#xe90a;',
		'icon-close': '&#xe909;',
		'icon-message': '&#xe908;',
		'icon-facebook': '&#xe905;',
		'icon-instagram': '&#xe906;',
		'icon-vk': '&#xe907;',
		'icon-next': '&#xe903;',
		'icon-previous': '&#xe904;',
		'icon-check': '&#xe900;',
		'icon-heart': '&#xe901;',
		'icon-star': '&#xe902;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
