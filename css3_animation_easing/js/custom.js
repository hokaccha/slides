$(function() {
	$('.help').bind('click touchstart', function(e) {
		e.stopPropagation();
		lock = true;
		var targetClass = $(this).attr('data-target');
		var target = $('.popup.' + targetClass).addClass('show');
		function close(e) {
			e.stopPropagation();
			target.removeClass('show');
			lock = false;
		}
		target.find('.close span').bind('click touchstart', close);
		$(document).bind('keydown', function(e) {
			if (e.keyCode == 27) {
				close();
			}
		});
	});

	//$('.demo1').click(function(event) {
	//	event.stopPropagation();
	//	$(this).addClass('move');
	//});
});
