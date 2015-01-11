$(function() {

window.Slide = {
	next: next,
	prev: prev
};

window.lock = false;

var pages = $('.page'),
	$d    = $(document),
	$w    = $(window);
	$wr   = $('.wrapper');

function get_page() {
	return parseInt(location.hash.replace(/^#page/, ''), 10) || 1;
}

function set_page() {
	var page = get_page();
	pages.not(':hidden').hide();
	pages.eq(page - 1).fadeIn().filter('.spread').height($wr.height());
}

function next() {
	if (lock) return;

	var page = get_page();
	if (pages.size() > page) {
		page++;
		location.hash = 'page' + page;
	}
}

function prev() {
	if (lock) return;

	var page = get_page();
	if (page > 1) {
		page--;
		location.hash = 'page' + page;
	}
}

// set id attr to page
pages.each(function(i) {
	var page_number = i + 1;
	$(this).attr('id', 'page' + page_number);
});

// attach event
$w.bind('hashchange', set_page);

$d.bind('click', next)
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

$wr.click(function() {
  // http://kimizuka.hatenablog.com/entry/2013/12/20/075448
});

$('a').click(function(e) {
	e.stopPropagation();
	e.preventDefault();
	window.open(this.href, '_blank');
});

// initialize
$wr.show();
set_page();

// highlight
$('pre').click(function(e) {
  e.stopPropagation();
});
$('code').each(function() {
  var $el = $(this);
  hljs.highlightBlock($el.get(0));
});

});
