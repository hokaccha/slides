$(function() {

var pages = $('.page'),
	$d    = $(document),
	$w    = $(window);

function get_page() {
	return parseInt(location.hash.replace(/^#page/, '')) || 1;
}

function set_page() {
	var page = get_page();
	pages.not(':hidden').hide();
	pages.eq(page - 1).fadeIn();
}

function next() {
	var page = get_page();
	if (pages.size() > page) {
		page++;
		location.hash = 'page' + page;
		if (window.onhashchange === undefined) {
			$w.trigger('hashchange');
		}
	}
}

function prev() {
	var page = get_page();
	if (page > 1) {
		page--;
		location.hash = 'page' + page;
		if (window.onhashchange === undefined) {
			$w.trigger('hashchange');
		}
	}
}

function height_adjust() {
	$('body').height( $w.height() );
}

// set id attr to page
pages.each(function(i) {
	var page_number = i + 1;
	$(this).attr('id', 'page' + page_number);
});

// attach event
$w.bind('hashchange', set_page)
	.bind('resize', height_adjust);

$d.bind('click touchstart', next)
	.bind('keydown', function(e) {
		switch (e.keyCode) {
		case 78: // n
		case 74: // j
		case 39: // ->
			next();
			break;
		case 80: // p
		case 75: // k
		case 37: // <-
			prev();
			break;
		}
	});

$('.wrapper').click(function() {
  // http://kimizuka.hatenablog.com/entry/2013/12/20/075448
});

$('a').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	window.open(this.href, '_blank');
});

// initialize
set_page();
height_adjust();

});
