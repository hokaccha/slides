$(function() {
  new TodoFormView( $('.todoForm') );
  new TodoListView( $('.todoList') );

  $('.usualList li').click(function() {
    Todo.add($(this).text());
  });

  $('.completeAll').click(function() {
    Todo.setCompleteAll();
  });
});
