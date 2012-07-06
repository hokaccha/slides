$.fn.rollover = function(opt) {
	return this.each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_o = src.replace(/(.*)\.(.*)$/, '$1_o.$2');
		img.hover(
			function() { img.attr('src', src_o) },
			function() { img.attr('src', src) }
		);
	});
};
