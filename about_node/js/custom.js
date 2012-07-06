$(function() {
	$('#manifestRev').click(function(event) {
		event.stopPropagation();
		$(this).find('strong').fadeOut(function() {
			$(this).text('# version 2').fadeIn();
			$('#manifestRev').unbind('click');
		});
	});
    $('code').each(function() {
      hljs.highlightBlock($(this).get(0));
    });
});
