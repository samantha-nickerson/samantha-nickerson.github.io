var $win = $(window);
var $intro = $('.intro');
var $introSection = $('.intro-section');
var $icons = $('.icons img');
var $services = $('.services');
var servicesOffset = $services.offset();

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	var iconsPos = (scrollPos - servicesOffset.top) / 2;

	$introSection.css('background-position', 'center ' + scrollPos / 1 + 'px');

	$services.css('background-position', 'center ' + iconsPos + 'px');
});

$services.waypoint(function(direction) {
	if (direction == 'down') {
		$icons.addClass('js-icons-animate');
	}else {
		$icons.removeClass('js-icons-animate');
	}
}, { offset: '60%' });