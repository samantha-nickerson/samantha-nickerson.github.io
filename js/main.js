var $icons = $('.icons img');
var $services = $('.services');

$services.waypoint(function(direction) {
	if (direction == 'down') {
		$icons.addClass('js-icons-animate');
	}else {
		$icons.removeClass('js-icons-animate');
	}
}, { offset: '60%' });