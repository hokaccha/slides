(function($) {

$.fn.rollover = function() {
  return this.each(function() {
    var $img = $(this);
    var src = $img.attr('src');
    var src_on = src.replace(/_off\.(\w+)$/, '_on.$1');

    $img.bind('mouseenter', function() {
      $img.attr('src', src_on);
    });

    $img.bind('mouseleave',function() {
      $img.attr('src', src);
    });
  });
};

})(jQuery);
