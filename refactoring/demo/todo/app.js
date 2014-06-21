$(function() {
  var $form = $('.todoForm');
  var $list = $('.todoList');

  $form.on('submit', function(e) {
    e.preventDefault();

    var $input = $('input[type="text"]');
    var val = $input.val();

    var $li = $('<li>');
    var $text = $('<span>').addClass('todoText').text(val);
    var $checkbox = $('<input type="checkbox">');
    var $remove = $('<i>').addClass('removeBtn fa fa-times');

    $checkbox.on('click', function() {
      $li.toggleClass('is-complete');
    });

    $remove.on('click', function() {
      if (!window.confirm('消しますよ')) return;
      $li.remove();
    });

    $li.append($checkbox, $text, $remove);
    $list.append($li);

    $input.val('');
  });
});
