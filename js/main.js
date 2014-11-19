var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipper = $('.dipper');
var $dipperSection = $('.dipper-section');
var $shuttle = $('.shuttle');
var $shuttleSection = $('.shuttle-section');
var $ships = $('.ships img');
var $shipsSection = $('.ships-section');
var shipsSectionOffset = $shipsSection.offset();

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	var shipsPos = (scrollPos - shipsSectionOffset.top) / 2;

	$sun.css('transform', 'rotate(-' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');

	$shipsSection.css('background-position', 'center ' + shipsPos + 'px');
});

$dipperSection.waypoint(function (direction) {
	if (direction == 'down') {
		$dipper.addClass('js-dipper-animate');
	} else {
		$dipper.removeClass('js-dipper-animate');
	}
}, { offset: '50%' });

$shuttleSection.waypoint(function (direction) {
	if (direction == 'down') {
		$shuttle.addClass('js-shuttle-animate');
	} else {
		$shuttle.removeClass('js-shuttle-animate');
	}
}, { offset: '50%' });

$shipsSection.waypoint(function(direction) {
	if (direction == 'down') {
		$ships.addClass('js-ships-animate');
	}else {
		$ships.removeClass('js-ships-animate');
	}
}, { offset: '60%' });
