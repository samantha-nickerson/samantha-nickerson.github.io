var $win = $(window);
var $intro = $('.intro');
var $introSection = $('.intro-section');
var $icons = $('.icons img');
var $iconsSection = $('.icons-section');
var iconsSectionOffset = $iconsSection.offset();

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	var iconsPos = (scrollPos - iconsSectionOffset.top) / 2;

	$introSection.css('background-position', 'center ' + scrollPos / 1 + 'px');

	$iconsSection.css('background-position', 'center ' + iconsPos + 'px');
});

$iconsSection.waypoint(function(direction) {
	if (direction == 'down') {
		$icons.addClass('js-icons-animate');
	}else {
		$icons.removeClass('js-icons-animate');
	}
}, { offset: '60%' });