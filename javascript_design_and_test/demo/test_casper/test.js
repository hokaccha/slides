var casper = require('casper').create();

casper.start('./index.html', function() {
  this.evaluate(function() {
    var form = document.querySelector('.todoForm');
    form.querySelector('input[type="text"]').value = 'foo';
    form.querySelector('input[type="submit"]').click();
  });
});

casper.then(function() {
  this.test.assertEvalEquals(function() {
    return document.querySelectorAll('.todoList li').length;
  }, 1, 'Added Todo List');

  this.test.assertEvalEquals(function() {
    return document.querySelector('.todoList li').textContent;
  }, 'foo', 'Added input value');
});

casper.run(function() {
    this.test.done();
    this.test.renderResults(true);
});
