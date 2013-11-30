$(function() {
  $('pre').click(function(e) {
    e.stopPropagation();
  });
  $('code').each(function() {
    var $el = $(this);
    if (!$el.attr('class')) {
      $el.addClass('ruby');
    }
    hljs.highlightBlock($el.get(0));
  });
});
