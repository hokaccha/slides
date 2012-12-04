$(function() {
  $('code').each(function() {
    hljs.highlightBlock($(this).get(0));
  });

  if (location.search !== '?progress') {
    return;
  }

  Slide.destroy();

  var $progress = $('.progress');

  function next() {
    Slide.next();
    $progress.css({
      width: 0,
      '-webkit-transition-duration': '0s'
    });
    setTimeout(function() {
      $progress.css({
        width: '100%',
        '-webkit-transition-duration': '20s'
      });
    }, 0);
    setTimeout(function() {
      next();
    }, 20000);
  }

  $progress.show().one('click', function() {
    next();
  });
});
